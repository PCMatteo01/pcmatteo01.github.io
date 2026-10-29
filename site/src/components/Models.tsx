import { useRef, useState } from 'react';

export interface ModelTile {
  id: string;
  title: string;
  tag: string;
  image: string;
  /** a Sketchfab id opens the viewer; an href opens a project page */
  sketchfab?: string;
  href?: string;
}

interface Props {
  items: ModelTile[];
  labels: { viewModel: string; view: string; close: string };
}

export default function Models({ items, labels }: Props) {
  const [open, setOpen] = useState<ModelTile | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const openModel = (t: ModelTile) => {
    setOpen(t);
    dialog.current?.showModal();
  };
  const closeModel = () => {
    dialog.current?.close();
    setOpen(null);
  };

  return (
    <>
      <div className="grid">
        {items.map((t) => {
          const frame = (
            <>
              <span className="cell__media">
                <img src={t.image} alt="" loading="lazy" width="1200" height="900" />
              </span>
              <span className="cell__cap">
                <span className="cell__title">{t.title}</span>
                <span className="cell__tags">{t.tag}</span>
              </span>
            </>
          );
          return t.href ? (
            <a key={t.id} className="cell" href={t.href} aria-label={`${labels.view}: ${t.title}`}>
              {frame}
            </a>
          ) : (
            <button key={t.id} type="button" className="cell" onClick={() => openModel(t)} aria-label={`${labels.viewModel}: ${t.title}`}>
              {frame}
            </button>
          );
        })}
      </div>

      <dialog ref={dialog} className="viewer" onClose={() => setOpen(null)} onClick={(e) => e.target === dialog.current && closeModel()}>
        <div className="viewer__bar">
          <span>{open?.title}</span>
          <button type="button" className="viewer__close" onClick={closeModel}>
            {labels.close}
          </button>
        </div>
        {open?.sketchfab && (
          <iframe
            title={open.title}
            src={`https://sketchfab.com/models/${open.sketchfab}/embed?autostart=1`}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
          />
        )}
      </dialog>
    </>
  );
}
