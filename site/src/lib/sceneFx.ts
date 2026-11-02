// Weather over a project's pixel-art scene, drawn on a small canvas that CSS scales up so every speck is a chunky square.
const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const PIXEL = 2;

type Draw = (ctx: CanvasRenderingContext2D, t: number, dt: number) => void;
type Effect = (w: number, h: number) => Draw;

function run(canvas: HTMLCanvasElement, effect: Effect) {
  const ctx = canvas.getContext('2d')!;
  let draw: Draw = () => {};
  let w = 0, h = 0;
  const resize = () => {
    const r = canvas.getBoundingClientRect();
    w = canvas.width = Math.max(1, Math.ceil(r.width / PIXEL));
    h = canvas.height = Math.max(1, Math.ceil(r.height / PIXEL));
    draw = effect(w, h);
  };
  resize();
  addEventListener('resize', resize);
  if (reduced) { draw(ctx, 0, 0); return; }
  let last = performance.now(), raf = 0, visible = true;
  const loop = (now: number) => {
    raf = 0;
    if (!visible) return;
    ctx.clearRect(0, 0, w, h);
    draw(ctx, now, Math.min(0.05, (now - last) / 1000));
    last = now;
    raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
  }).observe(canvas);
}

const snow: Effect = (w, h) => {
  const flakes = Array.from({ length: Math.round((w * h) / 650) }, () => ({ x: Math.random() * w, y: Math.random() * h, z: Math.random(), p: Math.random() * 6.28 }));
  return (ctx, t, dt) => {
    for (const f of flakes) {
      f.y += (6 + f.z * 22) * dt;
      f.x += (Math.sin(t / 900 + f.p) * 4 + 3) * dt * (0.4 + f.z);
      if (f.y > h) { f.y = -2; f.x = Math.random() * w; }
      if (f.x > w) f.x = 0;
      const big = f.z > 0.62;
      ctx.fillStyle = `rgba(235, 248, 255, ${big ? 0.95 : 0.55})`;
      ctx.fillRect(Math.floor(f.x), Math.floor(f.y), big ? 2 : 1, big ? 2 : 1);
    }
  };
};

// Low banks of mist: stacked rows of rectangles that read as blocky clouds, drifting at different speeds
const fog: Effect = (w, h) => {
  const wrap = w + 260;
  const banks = Array.from({ length: 7 }, (_, i) => ({
    y: h * (0.3 + 0.62 * (i / 6)) + Math.random() * 10,
    v: 2 + Math.random() * 5,
    a: 0.05 + Math.random() * 0.06,
    x: Math.random() * wrap,
    puffs: Array.from({ length: 5 }, () => ({ dx: Math.random() * wrap, r: 28 + Math.random() * 50 })),
  }));
  return (ctx, _t, dt) => {
    for (const b of banks) {
      b.x = (b.x + b.v * dt) % wrap;
      ctx.fillStyle = `rgba(205, 210, 205, ${b.a})`;
      for (const p of b.puffs) {
        const cx = ((p.dx + b.x) % wrap) - 130;
        for (let k = 0; k < 4; k++) {
          const half = p.r * (1 - k * 0.2);
          ctx.fillRect(Math.floor(cx - half), Math.floor(b.y + k * 3), Math.floor(half * 2), 3);
          ctx.fillRect(Math.floor(cx - half), Math.floor(b.y - k * 3), Math.floor(half * 2), 3);
        }
      }
    }
  };
};

const embers: Effect = (w, h) => {
  const colours = ['255, 176, 64', '255, 120, 44', '226, 70, 34'];
  const spawn = (first = false) => ({ x: Math.random() * w, y: first ? Math.random() * h : h + 2, v: 8 + Math.random() * 22, p: Math.random() * 6.28, c: colours[Math.floor(Math.random() * 3)], big: Math.random() < 0.3 });
  const sparks = Array.from({ length: Math.round((w * h) / 2200) }, () => spawn(true));
  return (ctx, t, dt) => {
    for (let i = 0; i < sparks.length; i++) {
      const s = sparks[i];
      s.y -= s.v * dt;
      s.x += Math.sin(t / 600 + s.p) * 6 * dt;
      if (s.y < -2) sparks[i] = spawn();
      const fade = Math.min(1, Math.max(0, s.y / (h * 0.5)));
      const flicker = 0.55 + 0.45 * Math.sin(t / 130 + s.p * 3);
      ctx.fillStyle = `rgba(${s.c}, ${(0.35 + 0.6 * fade) * flicker})`;
      ctx.fillRect(Math.floor(s.x), Math.floor(s.y), s.big ? 2 : 1, s.big ? 2 : 1);
    }
  };
};

const stars: Effect = (w, h) => {
  const field = Array.from({ length: Math.round((w * h) / 700) }, () => ({ x: Math.floor(Math.random() * w), y: Math.floor(Math.random() * h), p: Math.random() * 6.28, cross: Math.random() < 0.1 }));
  return (ctx, t) => {
    for (const s of field) {
      const a = Math.round((0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t / 900 + s.p))) * 4) / 4;
      ctx.fillStyle = `rgba(255, 244, 226, ${a})`;
      ctx.fillRect(s.x, s.y, 1, 1);
      if (s.cross && a > 0.7) {
        ctx.fillRect(s.x - 1, s.y, 3, 1);
        ctx.fillRect(s.x, s.y - 1, 1, 3);
      }
    }
  };
};

const effects: Record<string, Effect> = { snow, fog, embers, stars };

export function sceneFx() {
  document.querySelectorAll<HTMLElement>('.scene[data-fx]').forEach((scene) => {
    const canvas = scene.querySelector<HTMLCanvasElement>('.scene__fx');
    const effect = effects[scene.dataset.fx ?? ''];
    if (canvas && effect) run(canvas, effect);
  });
}
