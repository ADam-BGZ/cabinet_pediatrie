"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// TODO: confirmer la liste exacte des services avec le Dr. Abbad Adel
const servicesList = [
  {
    id: 1,
    title: "Suivi de Croissance et Développement",
    description:
      "Suivi régulier de la croissance et du développement de votre enfant, avec dépistage précoce des éventuels troubles et adaptation des conseils selon l'âge.",
    subitems: ["Courbes de croissance", "Développement moteur", "Dépistage précoce"],
  },
  {
    id: 2,
    title: "Vaccinations",
    description:
      "Calendrier vaccinal à jour selon les recommandations officielles. Nous assurons la vaccination des nourrissons, enfants et adolescents dans un cadre sécurisé.",
    subitems: ["Calendrier vaccinal", "Rappels", "Conseils post-vaccination"],
  },
  {
    id: 3,
    title: "Consultations Nourrissons",
    description:
      "Consultations dédiées aux bébés : examens de surveillance, conseils d'alimentation, suivi du développement neurologique et accompagnement des premiers mois.",
    subitems: ["Examens de surveillance", "Conseils d'alimentation", "Développement neurologique"],
  },
  {
    id: 4,
    title: "Consultations Enfants & Adolescents",
    description:
      "Soins médicaux adaptés aux enfants et adolescents : traitement des pathologies courantes, suivi de croissance et conseils de prévention santé.",
    subitems: ["Pathologies courantes", "Prévention santé", "Bilan de santé"],
  },
  {
    id: 5,
    title: "Conseils aux Parents",
    description:
      "Accompagnement et éducation santé pour les parents : alimentation, sommeil, hygiène, gestion des maladies infantiles et développement émotionnel.",
    subitems: ["Alimentation", "Sommeil", "Hygiène", "Développement émotionnel"],
  },
];

export function Services() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const header = useScrollAnimation("down");
  const list = useScrollAnimation("up");

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Un Suivi Pédiatrique Complet
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {/* TODO: confirmer la liste exacte des services avec le Dr. Abbad Adel */}
            Découvrez nos services de pédiatrie générale, dispensés par le Dr. Abbad Adel
            avec expertise et bienveillance au Cabinet de Pédiatrie Dr. Abbad Adel.
          </p>
        </div>

        <div ref={list.refCallback} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${list.animationClass}`}>
          <div className="flex flex-col gap-3">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className={`rounded-xl border transition-all cursor-pointer ${
                  activeId === service.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-white hover:border-primary/30 hover:shadow-sm"
                }`}
                onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              >
                <div className="flex items-center gap-4 p-5">
                  <span className="text-sm font-bold text-primary/60 w-8 text-right flex-shrink-0">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-foreground flex-1">
                    {service.title}
                  </span>
                  <ChevronRightIcon
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      activeId === service.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {activeId === service.id && (
                  <div className="px-5 pb-5 pl-17">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.subitems.map((sub) => (
                        <span
                          key={sub}
                          className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8 lg:mt-0">
            {/* TODO: remplacer par une photo d'une consultation pédiatrique ou de l'équipement du cabinet */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md aspect-[3/4] flex items-center justify-center"
              style={{ background: "linear-gradient(180deg, #E8F5E9 0%, #5BA4CF 100%)" }}
            >
              <span className="text-white/80 text-sm font-medium text-center px-4">
                Photo à venir
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
