import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/ui/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { inter } from "@/app/ui/fonts";
import "@/app/lib/fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pietro Costanzi Fantini",
  description: "Portfolio of Pietro Costanzi Fantini",
  keywords: "portfolio, developer, security, Pietro Costanzi Fantini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

