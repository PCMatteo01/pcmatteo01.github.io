import { useState, type CSSProperties } from 'react';
import { lazyVideo } from '../lib/lazyVideo';

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
  filters: { id: string; label: string }[];
  labels: { filter: string; view: string };
}

const tagLabel: Record<string, string> = { pc: 'PC', xr: 'XR' };

export default function Projects({ items, filters, labels }: Props) {
  const [active, setActive] = useState('all');
  const visible = items.filter((p) => active === 'all' || p.platforms.includes(active));

  return (
    <>
      <div className="filters" role="group" aria-label={labels.filter}>
        {filters.map((f) => (
          <button key={f.id} type="button" className="chip" aria-pressed={active === f.id} onClick={() => setActive(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="stages">
        {visible.map((p) => (
          <article className="stage win" key={p.id}>
            <a className="stage__media" href={p.href} tabIndex={-1} aria-hidden="true">
              {p.video ? (
                <video
                  ref={lazyVideo}
                  data-src={p.video}
                  poster={p.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  style={p.position ? ({ objectPosition: p.position } as CSSProperties) : undefined}
                />
              ) : (
                <img src={p.image} alt="" loading="lazy" width="1600" height="1000" />
              )}
            </a>
            <div className="stage__info">
              <ul className="stage__tags">
                {p.platforms.map((pl) => (
                  <li key={pl}>{tagLabel[pl]}</li>
                ))}
              </ul>
              <h3 className="stage__title">{p.title}</h3>
              <p className="stage__desc">{p.desc}</p>
              {p.facts && (
                <dl className="stage__facts">
                  {p.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <a className="btn-play" href={p.href}>
                {labels.view}
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
