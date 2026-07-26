"use client";

import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BASE_PATH } from "@/lib/utils";

const quickLinks = [
  { label: "Accueil", href: "#" },
  { label: "Le cabinet", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const contactItems = [
  { icon: PhoneIcon, text: "+212 6 74 40 50 60", href: "tel:+212674405060" },
  {
    icon: MailIcon,
    // TODO: Remplacer par l'adresse email du cabinet
    text: "contact@cabinet-pediatrie.ma",
    href: "mailto:contact@cabinet-pediatrie.ma",
  },
  {
    icon: MapPinIcon,
    text: "Avenue Ali Yaeta, Tétouan",
    href: "#",
  },
  { icon: ClockIcon, text: "Lun – Ven : 9h00 – 17h00 | Sam : 9h – 13h", href: "" },
];

export function Footer() {
  const anim = useScrollAnimation("up");

  return (
    <footer id="contact" className="bg-foreground text-white">
      <div ref={anim.refCallback} className={`max-w-7xl mx-auto px-4 py-16 ${anim.animationClass}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}/images/logo-pediatrie.png`}
                alt="Cabinet de Pédiatrie Dr. Abbad Adel"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Cabinet de pédiatrie à Tétouan. Suivi médical des nourrissons,
              enfants et adolescents par Dr. Abbad Adel.
            </p>
            <div className="flex gap-4">
              {/* TODO: Ajouter les vrais liens réseaux sociaux du Dr Abbad Adel */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all-fast hover:bg-accent hover:text-foreground"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all-fast hover:bg-accent hover:text-foreground"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Liens rapides</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 text-sm transition-all-fast hover:text-accent hover:translate-x-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 transition-all-fast hover:translate-x-1">
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 text-sm transition-all-fast hover:text-accent"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Restez informé de nos actualités et conseils santé pour vos enfants.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white/10 text-white placeholder-white/40 text-sm px-4 py-2.5 rounded-lg border border-white/20 focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors min-h-[44px]"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Cabinet de Pédiatrie Dr. Abbad Adel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
