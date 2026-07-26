"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    // TODO: Remplacer par les vraies données du Dr Abbad Adel
    value: "—",
    label: "Années d'Expérience",
    description:
      "L'expertise du Dr. Abbad Adel au service de la santé de vos enfants.",
  },
  {
    // TODO: Remplacer par les vraies données
    value: "—",
    label: "Patients Accueillis",
    description:
      "Chaque enfant bénéficie d'une attention personnalisée et de soins adaptés.",
  },
  {
    // TODO: Remplacer par les vraies données
    value: "—",
    label: "Consultations Réalisées",
    description:
      "Des suivis réguliers et des consultations complètes pour assurer la croissance saine de votre enfant.",
  },
];

export function Stats() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              Notre Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Pourquoi choisir notre cabinet ?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Le Dr. Abbad Adel et son équipe vous accueillent dans un cabinet
              moderne à Tétouan, dédié à la santé des enfants avec douceur
              et expertise.
            </p>
          </div>

          {/* Stats Grid */}
          <div ref={right.refCallback} className={`flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 ${right.animationClass}`}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-muted rounded-2xl p-6 sm:p-8 text-center transition-default hover:bg-primary/10 hover:shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground text-sm mb-2">
                  {stat.label}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
