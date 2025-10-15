// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import { routing } from "../../i18n/routing";
import { SITE } from "@/config/constants";
import { getMessages } from "next-intl/server";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeProviderCustom } from "@/hooks/useThemeToggle";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import NextIntlProviderWrapper from "@/components/providers/NextIntlProviderWrapper";
import Navbar from "@/components/ui_v2/navigation/Navbar";
import Footer from "@/components/ui_v2/Footer/Footer";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // canonical لكل جذر لغة. الصفحات نفسها (gallery/cars/...) تولّد canonical الخاص بها عبر getMetadataStatic/getMetadataDynamic
  return {
    metadataBase: new URL(SITE.URL),
    title: { default: SITE.NAME, template: `%s | ${SITE.NAME}` },
    description: SITE.DESCRIPTION,
    openGraph: { siteName: SITE.NAME, type: "website" },
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: "/en/",
        fr: "/fr/",
        "x-default": "/",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderCustom>
            <ThemeProviderWrapper>
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
