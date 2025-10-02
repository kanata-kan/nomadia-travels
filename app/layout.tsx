import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar";
import { ThemeProviderCustom } from "@/hooks/useThemeToggle";
import { baseMetadata } from "@/lib/metadata/base";
import { Geist, Geist_Mono } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = baseMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "yes",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <ThemeProviderCustom>
            <ThemeProviderWrapper>
              <Navbar />
              {children}
              <Footer />
            </ThemeProviderWrapper>
          </ThemeProviderCustom>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
