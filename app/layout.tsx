import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MobileNavProvider from "@/components/layout/MobileNavProvider";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Connect",
  description: "Campus Connect Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${manrope.className} min-h-full flex flex-col antialiased`}>
        <MobileNavProvider>{children}</MobileNavProvider>
      </body>
    </html>
  );
}
