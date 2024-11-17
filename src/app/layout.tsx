import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  title: "EverAfter - Your Trusted Wedding Organizer",
  description:
    "EverAfter specializes in creating unforgettable weddings with full-service planning, day-of coordination, and more. Let us make your dream day a reality!",
  keywords: [
    "wedding planning",
    "wedding coordination",
    "wedding organizer",
    "wo",
    "event managemnt",
    "EverAfter",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#FCF9F7] text-[14px] text-[#2B1105] antialiased md:text-[18px]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
