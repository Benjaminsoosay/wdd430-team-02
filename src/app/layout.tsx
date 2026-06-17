import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Discover unique handcrafted products from talented artisans around the world.",
  keywords: ["handcrafted", "artisan", "handmade", "crafts", "unique gifts", "artisan marketplace"],
  authors: [{ name: "Handcrafted Haven Team" }],
  creator: "Handcrafted Haven",
  publisher: "Handcrafted Haven",
  robots: "index, follow",
  openGraph: {
    title: "Handcrafted Haven - Artisan Marketplace",
    description: "Discover unique handcrafted products from talented artisans around the world.",
    url: "https://handcrafted-haven.vercel.app",
    siteName: "Handcrafted Haven",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Handcrafted Haven - Artisan Marketplace",
    description: "Discover unique handcrafted products from talented artisans around the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}