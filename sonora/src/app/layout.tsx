"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Righteous } from "next/font/google";
import Navbar from "@/components/Navbar";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={righteous.className}>
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
