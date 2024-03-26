import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "../providers/query";
import UIProvider from "../providers/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Popular Github Repositories",
  description: "Simple challenge for Redcare!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <UIProvider>
          {children}
          </UIProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
