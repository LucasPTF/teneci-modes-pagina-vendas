import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adeus Mente Acelerada | Teneci Modes",
  description:
    "Workshop psicoeducativo online e ao vivo para mulheres cristãs compreenderem a mente acelerada com clareza e responsabilidade.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
