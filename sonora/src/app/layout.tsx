import "./globals.css";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Sonora",
  description: "Mood-based music app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={righteous.className}>{children}</body>
    </html>
  );
}
