import type { Metadata } from "next";

import "./globals.css";
import { poppins } from "../lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chaharias - Celebrate in Style!",
  description:
    "Find your perfect festive outfit at Chaharias. Timeless fashion for every celebration.",
  openGraph: {
    images: ["/assets/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
