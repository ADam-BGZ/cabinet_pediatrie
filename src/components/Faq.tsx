"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Comment prendre rendez-vous au Wilaya Dental Center ?",
    answer:
      "Vous pouvez prendre rendez-vous par téléphone au +212 6 68 67 68 34, via WhatsApp, ou en remplissant le formulaire de contact. Nous offrons des créneaux flexibles du lundi au vendredi de 9h à 18h, et le samedi de 9h à 13h.",
  },
  {
    question: "Quels types de soins propose le cabinet ?",
    answer:
      "Notre cabinet est organisé en 4 pôles spécialisés : Chirurgie & Implants, Esthétique dentaire (blanchiment, facettes, smile design), Orthodontie (bagues et aligneurs transparents), et Soins Généraux (détartrage, caries, prothèses). Nous disposons également d'un scanner CBCT 3D sur place.",
  },
  {
    question: "Le scanner CBCT 3D est-il disponible au cabinet ?",
    answer:
      "Oui, nous disposons d'un cone beam (CBCT) 3D de dernière génération pour des diagnostics précis en implantologie, chirurgie et orthodontie. Les images sont analyées directement par le Dr. Nam pour un plan de traitement optimal.",
  },
  {
    question: "Acceptez-vous les enfants ?",
    answer:
      "Absolument ! Notre cabinet accueille les patients de tous les âges. Notre équipe est formée pour offrir un environnement rassurant aux plus jeunes, avec des soins préventifs et traitements adaptés à chaque tranche d'âge.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements en espèces, par carte bancaire et par chèque. {/* TODO: Ajouter les autres moyens de paiement acceptés par le cabinet (Virement, Amex, etc.) */} Des facilités de paiement peuvent être proposées pour les traitements de longue durée.",
  },
  {
    question: "Faut-il une ordonnance pour consulter ?",
    answer:
      "Non, aucune ordonnance n'est nécessaire pour consulter au Wilaya Dental Center. Vous pouvez prendre rendez-vous directement par téléphone ou via notre site. Le Dr. Nam établira un plan de traitement personnalisé lors de votre première visite.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const header = useScrollAnimation("down");
  const list = useScrollAnimation("up");

  return (
    <section id="faq" className="py-24 lg:py-40 bg-muted">
      <div className="max-w-4xl mx-auto px-4">
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Questions Fréquentes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Vos Questions, Nos Réponses
          </h2>
        </div>

        <div ref={list.refCallback} className={`flex flex-col gap-4 ${list.animationClass}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border overflow-hidden transition-all ${
                openIndex === index
                  ? "border-primary bg-white shadow-md"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left min-h-[48px]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronRightIcon
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
