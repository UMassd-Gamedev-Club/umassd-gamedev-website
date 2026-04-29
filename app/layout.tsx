import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/layout/menu";
import Header from "@/components/layout/header";

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umass Dartmouth Gamedev Club",
  description: "Resources for the UMD Gamedev Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable)}
    >
      <body className="min-h-screen bg-umd-metro-blue">
        <div className="flex min-h-screen flex-col">
          <Header />
          <Menu />
          <div className="flex-1 w-full mx-auto md:w-3/4">
            {children}</div>
        </div>
      </body>
    </html>
  );
}
