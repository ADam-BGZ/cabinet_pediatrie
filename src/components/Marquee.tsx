"use client";

export function Marquee() {
  // TODO: le client pourra ajouter de vrais chiffres ici (nombre de patients, années d'expérience, etc.)
  const items = [
    "Wilaya Dental Center Nam",
    "Dr. Rachid Nam",
    "Clinique Dentaire Multidisciplinaire",
    "Tétouan — Quartier de la Wilaya",
    "+212 6 68 67 68 34",
    "Lun – Ven : 9h00 – 18h00 | Sam : 9h – 13h",
  ];

  return (
    <div className="bg-primary text-white py-2.5 marquee-container">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-medium whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
