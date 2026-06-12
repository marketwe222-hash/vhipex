import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VIHIPEX University Institute | Yaoundé, Cameroon",
    template: "%s | VIHIPEX University Institute",
  },
  description:
    "VIHIPEX University Institute offers accredited, bilingual degree programs in Agriculture, IT, Engineering, Health Sciences, Business, and Management — aligned with CEMAC/LMD standards and built for real industry needs across Central Africa.",
  keywords: [
    "VIHIPEX",
    "university Cameroon",
    "higher education Yaoundé",
    "CEMAC LMD",
    "bilingual university",
    "agriculture degree Cameroon",
    "engineering degree Cameroon",
    "health sciences Cameroon",
    "business management degree",
    "HND Cameroon",
    "bachelor degree Cameroon",
    "master degree Cameroon",
  ],
  authors: [
    { name: "VIHIPEX University Institute", url: "https://vihipex.cm" },
  ],
  creator: "VIHIPEX University Institute",
  publisher: "VIHIPEX University Institute",
  metadataBase: new URL("https://vihipex.cm"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CM",
    alternateLocale: "fr_CM",
    url: "https://vihipex.cm",
    siteName: "VIHIPEX University Institute",
    title:
      "VIHIPEX University Institute | Empowering Africa's Future Professionals",
    description:
      "Accredited bilingual degrees in Agriculture, IT, Engineering, Health Sciences, Business & Management. Join thousands of graduates building careers across Central Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VIHIPEX University Institute — Yaoundé, Cameroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vihipex",
    creator: "@vihipex",
    title: "VIHIPEX University Institute | Yaoundé, Cameroon",
    description:
      "Accredited bilingual degrees built for real industry needs across Central Africa. Apply now for the 2024–2025 academic year.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
