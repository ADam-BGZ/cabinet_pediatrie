"use client";

import { useState } from "react";
import { PhoneIcon, MapPinIcon, ClockIcon, MenuIcon, XIcon } from "@/components/icons";
import { Marquee } from "@/components/Marquee";
import { BASE_PATH } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Le cabinet", href: "#about" },
  { label: "Nos services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="hidden sm:flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>Lun – Ven : 9h00 – 17h00 | Sam : 9h – 13h</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              <span>Avenue Ali Yaeta, Tétouan</span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors"
            >
              Contactez-nous
            </a>
            <a
              href="tel:+212674405060"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="font-semibold">+212 6 74 40 50 60</span>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Main Nav */}
      <div className="bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/images/logo-pediatrie.png`}
              alt="Cabinet de Pédiatrie Dr. Abbad Adel"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-primary block leading-tight">
                Cabinet de Pédiatrie
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Dr. Abbad Adel
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* TODO: confirmer canal de contact préféré */}
            <a
              href="tel:+212674405060"
              className="hidden sm:flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors min-h-[44px]"
            >
              Prenez RDV
            </a>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* TODO: confirmer canal de contact préféré */}
              <a
                href="tel:+212674405060"
                className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-sm min-h-[44px]"
              >
                Prenez RDV
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
