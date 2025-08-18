import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import {
  Cormorant_Garamond,
  Crimson_Text,
  Dancing_Script,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Olga & Edrich",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${crimson.variable} ${dancing.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
