import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundo Paloma",
  description: "En esta página web podras ver palomas, sus enfermedades y las posibles soluciones para sanarlas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://www.zarla.com/images/zarla-i-1x1-2400x2400-20211118-4rgftk8pf7p6byhpfyv8.png?crop=1:1,smart&width=250&dpr=2" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Seymour+One&display=swap');
        </style>
        {children}
      </body>
    </html>
  );
}
