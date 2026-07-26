"use client";

import { PhoneIcon, HeartIcon, ShieldIcon, UsersIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: HeartIcon, text: "Approche bienveillante et rassurante" },
  { icon: ShieldIcon, text: "Suivi médical complet pour chaque âge" },
  { icon: UsersIcon, text: "Accompagnement des parents" },
];

export function About() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              À propos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Cabinet de Pédiatrie Dr. Abbad Adel
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {/* TODO: donnée client manquante — paragraphe détaillé sur le Dr. Abbad Adel et le cabinet à valider avec le client */}
              &ldquo;Accompagner la croissance de vos enfants avec douceur, expertise et bienveillance.&rdquo;
              Le Dr. Abbad Adel vous accueille à Tétouan pour un suivi médical
              personnalisé, du nourrisson à l&apos;adolescent.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Notre cabinet est dédié à la santé des enfants. Nous proposons des consultations,
              des vaccinations et des conseils adaptés à chaque étape de la croissance,
              dans un cadre rassurant et bienveillant.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3 transition-default">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-default hover:bg-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* TODO: confirmer canal de contact préféré */}
              <a
                href="tel:+212674405060"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary/90 min-h-[44px]"
              >
                <PhoneIcon className="w-5 h-5" />
                Contactez-nous
              </a>
              <a
                href="tel:+212674405060"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary hover:text-white min-h-[44px]"
              >
                +212 6 74 40 50 60
              </a>
            </div>
          </div>

          {/* Right — Placeholder image */}
          <div ref={right.refCallback} className={`flex-1 relative ${right.animationClass}`}>
            {/* TODO: remplacer par une photo chaleureuse du Dr. Abbad Adel avec un jeune patient */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 transition-default hover:shadow-3xl">
              <div
                className="w-full aspect-square rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #5BA4CF, #E8F5E9)" }}
              >
                <span className="text-white/80 text-sm font-medium text-center px-4">
                  Photo à venir
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-foreground px-6 py-4 rounded-xl shadow-lg transition-default hover:scale-105">
              {/* TODO: donnée client manquante — remplacer par un vrai chiffre si disponible */}
              <div className="text-2xl font-bold">—</div>
              <div className="text-sm font-medium">Années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
