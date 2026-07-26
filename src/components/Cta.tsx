"use client";

import { ArrowRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Cta() {
  const anim = useScrollAnimation("up");

  return (
    <section className="py-24 lg:py-32">
      <div ref={anim.refCallback} className={`max-w-4xl mx-auto px-4 text-center ${anim.animationClass}`}>
        <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
          Votre sourire mérite le meilleur
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-8">
          Demandez Votre Plan de Soins Sur Mesure
        </h2>
        <a
          href="tel:+212668676834"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 min-h-[44px]"
        >
          Contactez-nous
          <ArrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
