import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marzooq's Page",
  description: "Dev Portfolio for marzooq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://esm.sh/@wooorm/starry-night@3/style/both" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-amber-50">
          <div className="mt-5 mb-8 flex flex-row justify-center align-middle p-2">
            <Link href="/" className="mx-2 hover:opacity-35">
              Home
            </Link >
            <Link href="" className="mx-2 hover:opacity-35">
              Resources
            </Link >
            <Link href="/blog" className="mx-2 hover:opacity-35">
              Blog
            </Link >
            <Link href="" className="mx-2 hover:opacity-35">
              Contact
            </Link >
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
