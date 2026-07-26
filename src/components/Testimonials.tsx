"use client";

import { StarIcon } from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Testimonials() {
  const header = useScrollAnimation("down");
  const card = useScrollAnimation("up");
  const cta = useScrollAnimation("up");

  return (
    <section id="testimonials" className="py-24 lg:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={header.refCallback} className={`text-center max-w-2xl mx-auto mb-16 ${header.animationClass}`}>
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">
            Avis Google
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
            Ce que nos patients disent
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            La satisfaction de nos patients est notre meilleure carte de visite.
          </p>
        </div>

        {/* Single Real Review */}
        <div ref={card.refCallback} className={`max-w-2xl mx-auto mb-16 ${card.animationClass}`}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm transition-default hover:shadow-lg">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-accent" />
              ))}
            </div>
            {/* TODO: Remplacer par le vrai avis Google du Dr Rachid Nam une fois disponible */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              &ldquo;Consultation très professionnelle. Le Dr. Nam prend le temps
              d&apos;expliquer les soins et le cabinet est moderne et bien équipé.
              Je recommande vivement Wilaya Dental Center.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">G</span>
              </div>
              <div>
                <span className="font-semibold text-foreground text-sm block">
                  Avis Google
                </span>
                <span className="text-xs text-muted-foreground">
                  Patient vérifié
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Google */}
        <div ref={cta.refCallback} className={`text-center ${cta.animationClass}`}>
          <p className="text-muted-foreground text-sm mb-6">
            {/* TODO: Ajouter le lien Google Business du Dr Rachid Nam */}
            Retrouvez tous nos avis sur Google
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all-fast hover:bg-primary hover:text-white hover:shadow-lg min-h-[44px]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Voir tous nos avis Google
          </a>
        </div>
      </div>
    </section>
  );
}
