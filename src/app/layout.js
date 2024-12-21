import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hi there! I'm Klaus",
  description: "My webpage",
  openGraph: {
    title: "klyse.eu",
    description: "My webpage",
    url: "https://klyse.eu",
    siteName: "klyse.eu",
    images: [
      {
        url: "https://klyse.eu/logo_white.png",
        width: 738,
        height: 738,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
