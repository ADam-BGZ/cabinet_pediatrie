"use client";

export function Marquee() {
  const items = [
    "Cabinet de Pédiatrie Dr. Abbad Adel",
    "Suivi Nourrissons, Enfants & Ados",
    "+212 6 74 40 50 60",
    "Tétouan",
    "Lun – Ven : 9h00 – 17h00 | Sam : 9h – 13h",
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
