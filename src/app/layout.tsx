import type { Metadata } from "next";
import { Jost, Libre_Caslon_Text } from "next/font/google";
import { FloatingButtons } from "@/components/FloatingButtons";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cabinet de Pédiatrie Dr. Abbad Adel — Pédiatrie à Tétouan",
  description:
    "Cabinet de pédiatrie à Tétouan. Suivi médical des nourrissons, enfants et adolescents par Dr. Abbad Adel. Accompagnement bienveillant et expertise médicale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jost.variable} ${libreCaslon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
