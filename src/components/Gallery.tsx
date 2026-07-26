"use client";

import { useState, useEffect, useCallback } from "react";
import { XIcon, ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const photos = [
  { src: `${BASE_PATH}/images/gallery/gallery-1.webp`, alt: "Accueil du Cabinet de Pédiatrie Dr. Abbad Adel" },
  { src: `${BASE_PATH}/images/gallery/gallery-2.webp`, alt: "Salle d'attente du Cabinet de Pédiatrie" },
  { src: `${BASE_PATH}/images/gallery/gallery-3.webp`, alt: "Décoration enfantine du cabinet" },
  { src: `${BASE_PATH}/images/gallery/gallery-4.webp`, alt: "Espace de consultation" },
  { src: `${BASE_PATH}/images/gallery/gallery-5.webp`, alt: "Équipe du Cabinet de Pédiatrie" },
  { src: `${BASE_PATH}/images/gallery/gallery-6.webp`, alt: "Cabinet médical pédiatrique" },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const header = useScrollAnimation("down");
  const grid = useScrollAnimation("up");

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Notre Cabinet
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Découvrez Notre Espace
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Un environnement pensé pour le confort et la sérénité de vos enfants.
          </p>
        </div>

        <div ref={grid.refCallback} className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${grid.animationClass}`}>
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={`Agrandir : ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={close}
          role="dialog"
          aria-label="Galerie photo"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <XIcon className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Photo précédente"
          >
            <ChevronRightIcon className="w-6 h-6 rotate-180" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Photo suivante"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 z-10 text-white/70 text-sm font-medium" onClick={(e) => e.stopPropagation()}>
            {lightboxIndex + 1} / {photos.length}
          </div>

          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
