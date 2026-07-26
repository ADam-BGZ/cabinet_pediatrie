"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { BASE_PATH } from "@/lib/utils";

const slides = [
  {
    badge: "Cabinet de Pédiatrie à Tétouan",
    title: (
      <>
        Accompagner la croissance
        <br />
        <span className="text-secondary">de vos enfants</span>
      </>
    ),
    description:
      "Suivi médical des nourrissons, enfants et adolescents avec douceur, expertise et bienveillance par Dr. Abbad Adel.",
  },
  {
    badge: "Suivi Médical",
    title: (
      <>
        Douceur &{" "}
        <span className="text-secondary">Bienveillance</span>
      </>
    ),
    description:
      "Consultations pédiatriques, vaccinations et conseils aux parents dans un environnement rassurant et adapté aux plus jeunes.",
  },
  {
    badge: "Pour les Enfants",
    title: (
      <>
        Expertise{" "}
        <span className="text-secondary">Pédiatrique</span>
      </>
    ),
    description:
      "Un accompagnement personnalisé pour chaque enfant, du nourrisson à l'adolescent, au cœur de Tétouan.",
  },
];

const services = ["NOURRISSONS", "ENFANTS", "ADOLESCENTS", "VACCINATIONS"];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[85svh] flex items-center overflow-hidden">
      {/* Image de fond fixe — toujours visible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE_PATH}/images/img-hero-1.png')` }}
      />
      <div className="absolute inset-0 bg-primary/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:py-28 w-full">
        <div className="max-w-2xl">
          <div key={`badge-${current}`} className="animate-hero-fade-in">
            <span className="inline-block bg-secondary/20 text-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-5 sm:mb-6">
              {slide.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              {slide.title}
            </h1>
          </div>

          <div key={`desc-${current}`} className="animate-hero-fade-in">
            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              {slide.description}
            </p>

            {/* TODO: confirmer canal de contact préféré */}
            <a
              href="tel:+212674405060"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-secondary/90 min-h-[44px]"
            >
              Réservez votre rendez-vous
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Service Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10 animate-hero-fade-in">
          {services.map((service) => (
            <span
              key={service}
              className="bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 transition-default hover:bg-white/25"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-8 sm:mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                i === current ? "bg-secondary w-8" : "bg-white/40 hover:bg-white/60 w-3"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
