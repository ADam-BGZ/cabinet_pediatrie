"use client";

import { ArrowRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PreRendezVous() {
  const anim = useScrollAnimation("up");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div ref={anim.refCallback} className={`${anim.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Prendre Rendez-Vous
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Votre santé bucco-dentaire nous tient à cœur
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-2xl mx-auto">
            Il est recommandé de consulter un dentiste au moins deux fois par an.
            Notre cabinet à Tétouan vous accueille du lundi au vendredi de 9h à 18h,
            et le samedi de 9h à 13h. Nous offrons une approche complète et
            personnalisée pour chaque patient.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Que ce soit pour un simple contrôle, un détartrage ou un traitement plus
            complexe, notre équipe est à votre écoute pour vous offrir les meilleurs
            soins dentaires à Tétouan.
          </p>
          <a
            href="tel:+212668676834"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 min-h-[44px] text-center"
          >
            Demandez Votre Plan de Soins Sur Mesure
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
