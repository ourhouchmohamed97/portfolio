// layout.tsx - simplified version
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Outfit } from "next/font/google";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit", 
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Mohamed Ourhouch",
  description: "MO Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}