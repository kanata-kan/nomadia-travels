import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// 🟢 استدعاء ThemeProviderWrapper
import { ThemeProviderWrapper } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomadia Travels",
  description: "Pick your own travel experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 🟢 ThemeProviderWrapper هنا */}
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
