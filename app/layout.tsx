import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spacez-red.vercel.app"),
  title: {
    default: "Spacez - Luxury Villas & Apartments for Rent",
    template: "%s | Spacez",
  },
  description:
    "Book luxury villas and apartments worldwide with Spacez. Discover exclusive properties, seamless booking, and unforgettable stays for your next vacation.",
  keywords:
    "luxury villas, luxury apartments, vacation rentals, holiday homes, book villas online, Spacez, Airbnb clone, premium accommodations",
  authors: [{ name: "Spacez Team" }],
  creator: "Spacez",
  publisher: "Spacez",
  alternates: {
    canonical: "https://spacez-red.vercel.app",
  },
  openGraph: {
    title: "Spacez - Luxury Villas & Apartments for Rent",
    description:
      "Discover and book luxury villas and apartments for your dream vacation with Spacez. Exclusive properties, seamless booking, and premium experiences.",
    url: "https://spacez-red.vercel.app",
    siteName: "Spacez",
    images: [
      {
        url: "https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png",
        width: 1200,
        height: 630,
        alt: "Luxury villa with pool - Spacez",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spacez - Luxury Villas & Apartments for Rent",
    description:
      "Book exclusive villas and apartments for your next vacation with Spacez. Premium stays, seamless booking.",
    images: ["https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png"],
    creator: "@SpacezTravel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png",
    shortcut: "https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png",
    apple: "https://res.cloudinary.com/dz3tveb47/image/upload/v1741425295/logo_for_websiter_1_1_iz3hbc.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="pt-[56px] pb-[76px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
