import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "@/components/theme-script";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyFinance",
  description: "Private household cash-flow planning with projected liquidity, recurring bills, and calendar visibility.",
  applicationName: "MyFinance",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "MyFinance",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8faf9" },
    { media: "(prefers-color-scheme: dark)", color: "#07120d" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeScript />
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
