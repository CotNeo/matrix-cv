import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Furkan Akar",
  description: "Personal portfolio website showcasing frontend development skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-matrix-black text-matrix-green font-matrix`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
