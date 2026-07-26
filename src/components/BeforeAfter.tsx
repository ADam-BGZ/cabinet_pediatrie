"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const cases = [
  {
    id: 1,
    before: `${BASE_PATH}/images/img-11.webp`,
    after: `${BASE_PATH}/images/img-12.webp`,
    title: "Blanchiment dentaire",
  },
  {
    id: 2,
    before: `${BASE_PATH}/images/img-13.webp`,
    after: `${BASE_PATH}/images/img-14.webp`,
    title: "Facettes dentaires",
  },
  {
    id: 3,
    before: `${BASE_PATH}/images/img-15.webp`,
    after: `${BASE_PATH}/images/img-16.webp`,
    title: "Orthodontie",
  },
];

export function BeforeAfter() {
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>(
    () => Object.fromEntries(cases.map((c) => [c.id, 50]))
  );
  const header = useScrollAnimation("down");
  const cards = useScrollAnimation("up");
  const cta = useScrollAnimation("up");

  const handleSliderChange = (id: number, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="before-after" className="py-24 lg:py-48 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-20 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            {/* TODO: donnée client manquante — cas cliniques du Dr Rachid Nam à ajouter */}
            Transformation Sourire
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Avant &amp; Après : Nos Succès
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {/* TODO: donnée client manquante — texte à adapter avec le vrai parcours du Dr Rachid Nam */}
            Spécialisée en dentisterie esthétique, le Dr Lahbichi s&apos;engage à
            offrir des soins dentaires de qualité supérieure adaptés à chaque
            patient.
          </p>
        </div>

        {/* Cases Grid */}
        <div ref={cards.refCallback} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 ${cards.animationClass}`}>
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-default hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden cursor-ew-resize">
                {/* After Image (background) */}
                <img
                  src={`${BASE_PATH}${item.after}`}
                  alt={`${item.title} - Après`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPositions[item.id]}%` }}
                >
                  <img
                    src={`${BASE_PATH}${item.before}`}
                    alt={`${item.title} - Avant`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${100 / (sliderPositions[item.id] / 100)}%`, maxWidth: "none" }}
                  />
                </div>

                {/* Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPositions[item.id]}
                  onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                />
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-5 pointer-events-none"
                  style={{ left: `${sliderPositions[item.id]}%`, transform: "translateX(-50%)" }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-default hover:scale-110">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full z-20">
                  Avant
                </div>
                <div className="absolute top-4 right-4 bg-accent text-foreground text-xs font-semibold px-3 py-1 rounded-full z-20">
                  Après
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={cta.refCallback} className={`text-center ${cta.animationClass}`}>
          <a
            href="tel:+212668676834"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary/90 hover:shadow-lg min-h-[44px] text-center"
          >
            Prenez Rendez-vous pour Votre Métamorphose Dentaire
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
