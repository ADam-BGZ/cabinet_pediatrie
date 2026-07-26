"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { BASE_PATH } from "@/lib/utils";

const slides = [
  {
    badge: "Clinique Dentaire à Tétouan",
    title: (
      <>
        Wilaya Dental
        <br />
        <span className="text-secondary">Center Nam</span>
      </>
    ),
    description:
      "Clinique dentaire multidisciplinaire au cœur de Tétouan. Soins d'exception par Dr. Rachid Nam, où votre sourire est notre priorité.",
    image: "/images/img-hero-reception.webp",
  },
  {
    badge: "Esthétique Dentaire",
    title: (
      <>
        Souriez en{" "}
        <span className="text-secondary">Confiance</span>
      </>
    ),
    description:
      "Blanchiment dentaire, facettes et smile design. Transformez votre sourire avec nos solutions esthétiques modernes et personnalisées.",
    image: "/images/bg-52.webp",
  },
  {
    badge: "Technologie de Pointe",
    title: (
      <>
        Imagerie{" "}
        <span className="text-secondary">3D / CBCT</span>
      </>
    ),
    description:
      "Imagerie radiologique 3D intégrée au centre pour des diagnostics précis et des traitements planifiés avec une précision maximale.",
    image: "/images/bg-52.webp",
  },
];

const services = ["IMPLANTOLOGIE", "ESTHÉTIQUE", "ORTHODONTIE", "SOINS GÉNÉRAUX"];

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
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[900px] flex items-center overflow-hidden">
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${BASE_PATH}${s.image}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          <div key={`badge-${current}`} className="animate-fade-in-down">
            <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              {slide.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {slide.title}
            </h1>
          </div>

          <div key={`desc-${current}`} className="animate-fade-in-left">
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl">
              {slide.description}
            </p>

            <a
              href="tel:+212668676834"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-secondary/90 min-h-[44px]"
            >
              Réservez votre rendez-vous
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Service Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-12 animate-fade-in-up">
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
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-secondary w-8" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
