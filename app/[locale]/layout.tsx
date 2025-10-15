import { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import { routing } from "../../i18n/routing";
import { getMessages } from "next-intl/server";
import { SITE } from "@/config/constants";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeProviderCustom } from "@/hooks/useThemeToggle";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";
import NextIntlProviderWrapper from "@/components/providers/NextIntlProviderWrapper";
import Navbar from "@/components/ui_v2/navigation/Navbar";
import Footer from "@/components/ui_v2/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // ✅ ضروري نحدد الأوزان المستعملة
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // ✅ نفس الشيء هنا
  variable: "--font-poppins",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ✅ NEW — generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const base = SITE.URL.replace(/\/$/, "");

  const canonical = `${base}/${locale}/`;
  const alternates = {
    canonical,
    languages: {
      en: `${base}/en/`,
      fr: `${base}/fr/`,
      "x-default": `${base}/`,
    },
  };

  return {
    title: {
      default: SITE.NAME,
      template: `%s | ${SITE.NAME}`,
    },
    description: SITE.DESCRIPTION,
    openGraph: {
      siteName: SITE.NAME,
      type: "website",
    },
    alternates, // ✅ Inject canonical + hreflang officially
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
