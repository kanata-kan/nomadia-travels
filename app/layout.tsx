import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar";
import { ThemeProviderCustom } from "@/hooks/useThemeToggle";
import { baseMetadata } from "@/lib/metadata/base";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ✅ Metadata site-wide
export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderCustom>
          <ThemeProviderWrapper>
            <Navbar />
            {children}
            <Footer />
          </ThemeProviderWrapper>
        </ThemeProviderCustom>
      </body>
    </html>
  );
}
