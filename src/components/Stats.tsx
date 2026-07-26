"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    // TODO: Remplacer par les vraies données du Dr Rachid Nam
    value: "—",
    label: "Années d'Expérience",
    description:
      "L'expertise du Dr. Rachid Nam au service de votre santé bucco-dentaire.",
  },
  {
    // TODO: Remplacer par les vraies données
    value: "—",
    label: "Patients Accueillis",
    description:
      "Chaque patient bénéficie d'une attention personnalisée et de soins de qualité.",
  },
  {
    // TODO: Remplacer par les vraies données
    value: "—",
    label: "Interventions Réalisées",
    description:
      "Des traitements précis et réussis grâce à des équipements de dernière génération.",
  },
];

export function Stats() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section className="py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              Notre Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
              Pourquoi choisir Wilaya Dental Center ?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Le Dr. Rachid Nam et son équipe vous accueillent dans un cabinet
              moderne à Tétouan, équipé des technologies les plus récentes pour
              des soins dentaires d&apos;excellence.
            </p>
          </div>

          {/* Stats Grid */}
          <div ref={right.refCallback} className={`flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 ${right.animationClass}`}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-muted rounded-2xl p-8 text-center transition-default hover:bg-primary/10 hover:shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground text-sm mb-3">
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
