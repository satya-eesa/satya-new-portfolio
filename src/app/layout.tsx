import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#06070a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://satya-vlsi-portfolio.vercel.app"),
  title: "Satya Eesa | Hardware Engineer, DSA & Aspiring Web Developer",
  description:
    "Official portfolio of Satya Eesa, Electronics & Communication Engineering undergraduate at IIIT Sri City. Specializing in Digital VLSI & RTL Design, C++ Data Structures & Algorithms (DSA), and exploring modern web development.",
  keywords: [
    "Satya Eesa",
    "Hardware Engineer",
    "VLSI Portfolio",
    "RTL Design",
    "Verilog HDL",
    "Data Structures and Algorithms",
    "DSA",
    "C++ Problem Solving",
    "Embedded Systems",
    "IIIT Sri City",
    "Vivado",
    "GTKWave",
    "Web Development Foundations"
  ],
  authors: [{ name: "Satya Eesa", url: "https://satya-vlsi-portfolio.vercel.app" }],
  creator: "Satya Eesa",
  openGraph: {
    title: "Satya Eesa | Hardware Engineer, DSA & Aspiring Web Developer",
    description:
      "Undergraduate engineer at IIIT Sri City specializing in digital VLSI & RTL design, C++ algorithmic problem-solving foundations, and exploring web development.",
    url: "https://satya-vlsi-portfolio.vercel.app",
    siteName: "Satya Eesa Portfolio",
    images: [
      {
        url: "/images/Satya_sq_pic.png",
        width: 800,
        height: 800,
        alt: "Satya Eesa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { ThemeProvider } from "../components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
