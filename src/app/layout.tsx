import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koumandy",
  description: "have fun",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full h-dvh flex flex-col justify-center items-center">{children}</body>
    </html>
  );
}
