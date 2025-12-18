import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { CustomCursor } from "@/app/components/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsehaosu.com"),
  title: {
    default: "Tse-Hao (Eastin) Su - Full Stack Developer",
    template: "%s | Tse-Hao Su",
  },
  description:
    "A fullstack developer who ships. Specializing in Next.js, React, TypeScript, and AI-powered web applications. View my projects and get in touch.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "AI Integration",
    "Tse-Hao Su",
    "Eastin Su",
    "Portfolio",
  ],
  authors: [{ name: "Tse-Hao (Eastin) Su", url: "https://tsehaosu.com" }],
  creator: "Tse-Hao Su",
  publisher: "Tse-Hao Su",
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
  alternates: {
    canonical: "https://tsehaosu.com",
  },
  openGraph: {
    title: "Tse-Hao (Eastin) Su - Full Stack Developer",
    description:
      "A fullstack developer who ships. Specializing in Next.js, React, TypeScript, and AI-powered web applications.",
    url: "https://tsehaosu.com",
    siteName: "Tse-Hao Su Portfolio",
    images: [
      {
        url: "/Meta.png",
        width: 1200,
        height: 630,
        alt: "Tse-Hao Su - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tse-Hao (Eastin) Su - Full Stack Developer",
    description:
      "A fullstack developer who ships. Specializing in Next.js, React, TypeScript, and AI-powered web applications.",
    images: ["/Meta.png"],
    creator: "@tsehaosu",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={twMerge(
          "bg-gray-900 text-white antialiased font-sans lg:cursor-none",
          inter.variable,
          calistoga.variable
        )}
      >
        <CustomCursor />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
