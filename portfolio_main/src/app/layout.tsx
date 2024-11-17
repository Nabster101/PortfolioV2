import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/ui/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { inter } from "@/app/ui/fonts";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Pietro Costanzi Fantini</title>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}