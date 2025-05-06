import type { Metadata } from "next";
import localFont from 'next/font/local';
import { ClientDebug } from "@/components/utils/ClientDebug";
import "./globals.css";

const neueHaas = localFont({
  src: './fonts/neue-haas-display-regular.woff2',
  variable: '--font-neue-haas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Parallel",
  description: "We are a global company made up of purpose-built remote teams, each operating under their own segment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueHaas.variable} antialiased`}
      >
        <ClientDebug>{children}</ClientDebug>
      </body>
    </html>
  );
}
