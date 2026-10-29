// Clips load and play only while they are on screen, and stay on their poster with "reduce motion".
const reduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let io: IntersectionObserver | undefined;

function observer() {
  io ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const v = e.target as HTMLVideoElement;
        if (e.isIntersecting) {
          if (!v.getAttribute('src') && v.dataset.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    },
    { threshold: 0.25 },
  );
  return io;
}

export function lazyVideo(el: HTMLVideoElement | null) {
  if (!el || reduced) return;
  observer().observe(el);
}

export function lazyVideos(root: ParentNode = document) {
  root.querySelectorAll<HTMLVideoElement>('video[data-src]').forEach(lazyVideo);
}
