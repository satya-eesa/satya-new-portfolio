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
  title: "Satya Eesa | VLSI & RTL Design Engineer Portfolio",
  description:
    "Official portfolio of Satya Eesa, Electronics & Communication Engineering student at IIIT Sri City specializing in RTL Design, Verilog HDL, Digital System Architecture, and Embedded Systems.",
  keywords: [
    "Satya Eesa",
    "VLSI Portfolio",
    "RTL Design",
    "Verilog HDL",
    "SystemVerilog",
    "IIIT Sri City",
    "Digital Design",
    "Embedded Systems",
    "FPGA",
    "ASIC Flow",
    "Vivado",
    "GTKWave"
  ],
  authors: [{ name: "Satya Eesa", url: "https://satya-vlsi-portfolio.vercel.app" }],
  creator: "Satya Eesa",
  openGraph: {
    title: "Satya Eesa | VLSI & RTL Design Engineer Portfolio",
    description:
      "Electronics & Communication Engineering student at IIIT Sri City. Passionate about RTL Design, Verilog HDL, Digital Architecture, and Embedded Systems.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#080a11] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
