"use client";

import { PhoneIcon, ShieldIcon, HeartIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: PhoneIcon, text: "Rendez-vous rapide" },
  { icon: ShieldIcon, text: "Équipement de pointe" },
  { icon: HeartIcon, text: "Soins personnalisés" },
];

export function EmergencyCta() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Phone */}
          <div ref={left.refCallback} className={`text-center lg:text-left ${left.animationClass}`}>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              {/* TODO: Confirmer si le cabinet offre un service d'urgence */}
              Besoin d&apos;un rendez-vous ?
            </span>
            <a
              href="tel:+212668676834"
              className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 transition-all-fast hover:text-accent break-all sm:break-normal"
            >
              +212 6 68 67 68 34
            </a>
          </div>

          {/* Right - Content */}
          <div ref={right.refCallback} className={`text-center lg:text-right ${right.animationClass}`}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Au-Delà des Soins Dentaires
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-xl">
              Le Wilaya Dental Center de Tétouan, dirigé par le Dr. Rachid Nam,
              offre des soins dentaires d&apos;exception pour patients de tous âges.
              De la prévention aux traitements complexes, nous proposons une
              approche globale pour votre santé bucco-dentaire.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 mb-6">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-white/90 text-sm transition-all-fast hover:text-white"
                >
                  <feature.icon className="w-5 h-5 text-accent animate-rotate" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            <a
              href="tel:+212668676834"
              className="inline-flex items-center gap-2 bg-accent text-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm transition-all-fast hover:bg-accent/90 min-h-[44px]"
            >
              Prenez votre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
