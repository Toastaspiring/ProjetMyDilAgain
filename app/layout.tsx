import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import LandingPage from "./landing/page";
import Immeuble from '../components/batiments/Immeuble/immeuble'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // CREER des composants Batiments pour pouvoir les appeler en fonction du nombre max de fenetre et d'étages
  // et créer nu fonction pour gérer lequel est appelé (en dehors pour faire ça bien)
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="flex w-full h-screen bg-red-200">
        <Immeuble/>
      </body>
    </html>
  );
}
