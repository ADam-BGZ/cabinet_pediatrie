"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// TODO: brouillon de questions à valider avec le Dr. Abbad Adel
const faqs = [
  {
    question: "Comment prendre rendez-vous au Cabinet de Pédiatrie ?",
    answer:
      "Vous pouvez prendre rendez-vous par téléphone au +212 6 74 40 50 60, via WhatsApp, ou en remplissant le formulaire de contact. Nous offrons des créneaux flexibles du lundi au vendredi de 9h à 17h, et le samedi de 9h à 13h.",
  },
  {
    question: "Quels âges acceptez-vous au cabinet ?",
    answer:
      "Notre cabinet accueille les nourrissons, les enfants et les adolescents. Le Dr. Abbad Adel assure un suivi médical complet adapté à chaque tranche d'âge, de la naissance à l'adolescence.",
  },
  {
    question: "Quand consulter un pédiatre pour la première fois ?",
    answer:
      "Il est recommandé de consulter un pédiatre dès les premières semaines de vie de votre enfant. Le Dr. Abbad Adel vous guide dans les examens de surveillance essentiels et le calendrier vaccinal.",
  },
  {
    question: "Le cabinet propose-t-il des vaccinations ?",
    answer:
      "Oui, nous assurons la vaccination selon le calendrier vaccinal officiel. Le Dr. Abbad Adel vous informe sur les vaccins recommandés et assure leur administration dans un cadre sécurisé.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements en espèces et par carte bancaire. {/* TODO: Ajouter les autres moyens de paiement acceptés par le cabinet */} N'hésitez pas à nous contacter pour toute question.",
  },
  {
    question: "Comment se déroule la première consultation ?",
    answer:
      "Lors de la première consultation, le Dr. Abbad Adel réalise un bilan de santé complet de votre enfant, prend connaissance de ses antécédents et répond à toutes vos questions. Apportez le carnet de santé de votre enfant si possible.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const header = useScrollAnimation("down");
  const list = useScrollAnimation("up");

  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted">
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
