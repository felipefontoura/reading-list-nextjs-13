import "./globals.css";
import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-lora",
});
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "The Reading List",
  description: "Organize seu tempo e leia mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${lora.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
