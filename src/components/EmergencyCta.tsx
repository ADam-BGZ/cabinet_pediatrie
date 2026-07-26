"use client";

import { PhoneIcon, HeartIcon, ShieldIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: PhoneIcon, text: "Rendez-vous rapide" },
  { icon: ShieldIcon, text: "Environnement rassurant" },
  { icon: HeartIcon, text: "Soins bienveillants" },
];

export function EmergencyCta() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Phone */}
          <div ref={left.refCallback} className={`text-center lg:text-left ${left.animationClass}`}>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              {/* TODO: confirmer si le cabinet propose des consultations en urgence */}
              Besoin d&apos;un rendez-vous ?
            </span>
            <a
              href="tel:+212674405060"
              className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 transition-all-fast hover:text-accent break-all sm:break-normal"
            >
              +212 6 74 40 50 60
            </a>
          </div>

          {/* Right - Content */}
          <div ref={right.refCallback} className={`text-center lg:text-right ${right.animationClass}`}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              L&apos;expertise au service de vos enfants
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">
              Le Cabinet de Pédiatrie Dr. Abbad Adel à Tétouan offre un suivi médical
              complet pour les nourrissons, enfants et adolescents. De la prévention
              aux consultations, nous accompagnons la croissance de vos enfants.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-5 mb-6">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-white/90 text-sm transition-all-fast hover:text-white"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            {/* TODO: confirmer canal de contact préféré */}
            <a
              href="tel:+212674405060"
              className="inline-flex items-center gap-2 bg-accent text-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-accent/90 min-h-[44px]"
            >
              Prenez votre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
