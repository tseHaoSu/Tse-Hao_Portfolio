import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { CustomCursor } from "@/app/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tse-Hao (Eastin) Su - Portfolio",
  description:
    "Full Stack Developer specializing in Next.js, React, and modern web technologies. Building exceptional digital experiences.",
  openGraph: {
    title: "Tse-Hao (Eastin) Su - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and modern web technologies",
    url: "https://tsehaosu.com",
    siteName: "Tse-Hao Su Portfolio",
    images: [
      {
        url: "/Meta.png",
        width: 1200,
        height: 630,
        alt: "Tse-Hao Su Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
