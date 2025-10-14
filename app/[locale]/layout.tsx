// ==========================================================
// 🌍 RootLayout — Locale-aware layout with static metadata
// ==========================================================
// ✅ Fully SSR-compatible
// ✅ Next.js 15+ compliant with Promise params
// ✅ Restores metadata inside <head>
// ==========================================================

import { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";

import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeProviderCustom } from "@/hooks/useThemeToggle";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import Navbar from "@/components/ui_v2/navigation/Navbar";
import Footer from "@/components/ui_v2/Footer/Footer";
import { routing } from "../../i18n/routing";

import NextIntlProviderWrapper from "@/components/providers/NextIntlProviderWrapper";
import { getMessages } from "next-intl/server";

// ==========================================================
// 🧠 Fonts
// ==========================================================
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// ==========================================================
// 🌍 Static Params for i18n
// ==========================================================
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ==========================================================
// 🏗️ Root Layout (async-compatible)
// ==========================================================
export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ نجيبو messages مرّة وحدة فـserver
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderCustom>
            <ThemeProviderWrapper>
              {/* ✅ نمرّرو messages للـclient wrapper */}
              <NextIntlProviderWrapper locale={locale} messages={messages}>
                <Navbar />
                <main className="main-container">{children}</main>
                <Footer />
              </NextIntlProviderWrapper>
            </ThemeProviderWrapper>
          </ThemeProviderCustom>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
