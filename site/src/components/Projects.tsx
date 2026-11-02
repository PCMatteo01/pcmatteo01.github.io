import { useEffect, useRef, useState } from 'react';

export interface ProjectItem {
  id: string;
  title: string;
  platforms: string[];
  image: string;
  imageAlt: string;
  position?: string;
  video?: string;
  poster?: string;
  desc: string;
  facts?: [string, string][];
  href: string;
}

interface Props {
  items: ProjectItem[];
  labels: { view: string };
}

const tagLabel: Record<string, string> = { pc: 'PC', xr: 'XR' };
const coarse = () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

// A list of games on the left; the one you point at plays on the right.
export default function Projects({ items, labels }: Props) {
  const [active, setActive] = useState(0);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        if (!v.getAttribute('src') && v.dataset.src) v.src = v.dataset.src;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const p = items[active];

  return (
    <div className="idx">
      <ol className="idx__list">
        {items.map((it, i) => (
          <li key={it.id}>
            <a
              className="idx__row"
              href={it.href}
              aria-current={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={(e) => {
                if (coarse() && i !== active) {
                  e.preventDefault();
                  setActive(i);
                }
              }}
            >
              <span className="idx__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="idx__title">{it.title}</span>
              <span className="idx__tags">{it.platforms.map((pl) => tagLabel[pl]).join(' ')}</span>
            </a>
          </li>
        ))}
      </ol>

      <div className="idx__view">
        <a className="idx__media" href={p.href} tabIndex={-1} aria-hidden="true">
          {items.map((it, i) =>
            it.video ? (
              <video
                key={it.id}
                ref={(el) => {
                  videos.current[i] = el;
                }}
                className={i === active ? 'on' : ''}
                data-src={it.video}
                poster={it.poster ?? it.image}
                muted
                loop
                playsInline
                preload="none"
                style={it.position ? { objectPosition: it.position } : undefined}
              />
            ) : (
              <img key={it.id} className={i === active ? 'on' : ''} src={it.image} alt="" loading="lazy" style={it.position ? { objectPosition: it.position } : undefined} />
            ),
          )}
        </a>
        <p className="idx__desc">{p.desc}</p>
        {p.facts && (
          <dl className="card__meta">
            {p.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        )}
        <a className="card__link" href={p.href}>
          {labels.view}
        </a>
      </div>
    </div>
  );
}
