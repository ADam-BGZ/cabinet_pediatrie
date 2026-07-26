"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const poles = [
  {
    id: 1,
    title: "Pôle Chirurgie & Implants",
    description:
      "Implantologie dentaire avancée, extractions chirurgicales complexes et prothèses sur implants. Notre équipe maîtrise les techniques les plus récentes pour vous offrir des résultats durables et naturels.",
    subitems: ["Implantologie dentaire", "Extractions chirurgicales", "Prothèses sur implants"],
  },
  {
    id: 2,
    title: "Pôle Esthétique",
    description:
      "Blanchiment dentaire professionnel, facettes en porcelaine et relooking du sourire (Smile Design). Révélez le meilleur de votre sourire grâce à nos traitements esthétiques personnalisés.",
    subitems: ["Blanchiment dentaire", "Facettes dentaires", "Smile Design"],
  },
  {
    id: 3,
    title: "Pôle Orthodontie",
    description:
      "Alignement dentaire pour enfants et adultes. Bagues conventionnelles et aligneurs transparents pour un traitement confortable et discret.",
    subitems: ["Alignement dentaire", "Traitement enfants", "Traitement adultes"],
  },
  {
    id: 4,
    title: "Pôle Soins Généraux",
    description:
      "Traitement des caries, endodontie (soins des racines), détartrage professionnel et dentisterie pédiatrique. Des soins essentiels pour maintenir votre santé bucco-dentaire.",
    subitems: ["Traitement des caries", "Endodontie", "Détartrage", "Dentisterie pédiatrique"],
  },
  {
    id: 5,
    title: "Imagerie Radiologique 3D / CBCT",
    description:
      "Imagerie radiologique 3D (Cone Beam CT) intégrée au centre pour des diagnostics précis et une planification de traitements optimale. Technologie de dernière génération.",
    subitems: ["Radiographie 3D", "CBCT intégrée", "Diagnostic précis"],
  },
];

export function Services() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const header = useScrollAnimation("down");
  const list = useScrollAnimation("up");

  return (
    <section id="services" className="py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Pôles de Soins Dentaires à Tétouan
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Découvrez nos pôles de spécialités, dispensés par une équipe qualifiée
            et passionnée au Wilaya Dental Center Nam.
          </p>
        </div>

        <div ref={list.refCallback} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${list.animationClass}`}>
          <div className="flex flex-col gap-3">
            {poles.map((pole) => (
              <div
                key={pole.id}
                className={`rounded-xl border transition-all cursor-pointer ${
                  activeId === pole.id
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border bg-white hover:border-primary/30 hover:shadow-sm"
                }`}
                onClick={() => setActiveId(activeId === pole.id ? null : pole.id)}
              >
                <div className="flex items-center gap-4 p-5">
                  <span className="text-sm font-bold text-primary/60 w-8 text-right flex-shrink-0">
                    {String(pole.id).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-foreground flex-1">
                    {pole.title}
                  </span>
                  <ChevronRightIcon
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      activeId === pole.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {activeId === pole.id && (
                  <div className="px-5 pb-5 pl-17">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {pole.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pole.subitems.map((sub) => (
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
            {/* TODO: remplacer par une photo dédiée fournie par le client */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md aspect-[3/4]">
              <img
                src={`${BASE_PATH}/images/img-services-equipment.png`}
                alt="Wilaya Dental Center Nam — Équipement du cabinet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
