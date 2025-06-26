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
  title: "BudBeam Technologies | The Future of Dispensary Intelligence",
  description: "Coming soon: BudBeam is revolutionizing the cannabis retail experience with a compliant, intelligent, and seamless platform for dispensaries.",
  keywords: ["cannabis", "dispensary", "retail", "technology", "SOC 2", "point of sale", "BudBeam"],
  openGraph: {
    title: "BudBeam Technologies | A New Era of Dispensary Intelligence",
    description: "The future of compliant, intelligent, and seamless cannabis retail.",
    url: "https://www.budbeam.io",
    siteName: "BudBeam Technologies",
    images: [
      {
        url: "https://www.budbeam.io/logo/bbthor.png",
        width: 350,
        height: 350,
        alt: "BudBeam Technologies Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BudBeam Technologies | The Future of Dispensary Intelligence",
    description: "The future of compliant, intelligent, and seamless cannabis retail.",
    images: ["https://www.budbeam.io/logo/bbthor.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
