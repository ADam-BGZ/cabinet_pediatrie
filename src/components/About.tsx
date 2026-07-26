"use client";

import { PhoneIcon, ShieldIcon, AwardIcon, HeartIcon, AccessibilityIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const features = [
  { icon: ShieldIcon, text: "Équipements de dernière génération" },
  { icon: AwardIcon, text: "Imagerie radiologique 3D / CBCT intégrée" },
  { icon: HeartIcon, text: "Approche patient centrée" },
];

const accessibility = [
  { icon: AccessibilityIcon, text: "Entrée accessible en fauteuil roulant" },
  { icon: AccessibilityIcon, text: "Toilettes adaptées aux PMR" },
  { icon: AccessibilityIcon, text: "Parking gratuit sur place" },
  { icon: AccessibilityIcon, text: "Stationnement gratuit dans la rue" },
];

export function About() {
  const left = useScrollAnimation("left");
  const right = useScrollAnimation("right");

  return (
    <section id="about" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div ref={left.refCallback} className={`flex-1 ${left.animationClass}`}>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
              À propos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Wilaya Dental Center Nam
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              {/* TODO: donnée client manquante — paragraphe détaillé sur le Dr. Rachid Nam et le cabinet à valider avec le client */}
              Clinique dentaire multidisciplinaire située dans le Quartier de la Wilaya à
              Tétouan. Le Dr. Rachid Nam et son équipe vous offrent des soins dentaires
              complets dans un environnement moderne et rassurant.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Omnipratique, implantologie, esthétique et orthodontie — notre centre
              combine expertise médicale et technologies de pointe pour votre bien-être.
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

            {/* Accessibilité */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
                Accessibilité
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {accessibility.map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+212668676834"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-base transition-all-fast hover:bg-primary/90"
              >
                <PhoneIcon className="w-5 h-5" />
                Contactez-nous
              </a>
              <a
                href="tel:+212668676834"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-base transition-all-fast hover:bg-primary hover:text-white"
              >
                +212 6 68 67 68 34
              </a>
            </div>
          </div>

          {/* Right — Logo */}
          <div ref={right.refCallback} className={`flex-1 relative ${right.animationClass}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8 transition-default hover:shadow-3xl">
              <img
                src={`${BASE_PATH}/images/logo-wilaya.png`}
                alt="Wilaya Dental Center Nam"
                className="w-full h-auto object-contain transition-default hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-foreground px-6 py-4 rounded-xl shadow-lg transition-default hover:scale-105">
              {/* TODO: donnée client manquante — remplacer par le vrai chiffre du Dr Rachid Nam */}
              <div className="text-2xl font-bold">—</div>
              <div className="text-sm font-medium">Années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
