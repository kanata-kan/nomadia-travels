// app/[locale]/layout.tsx
export const dynamic = "force-dynamic";

import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import { ThemeProviderCustom } from "@/hooks/useThemeToggle";
import ThemeProviderWrapper from "@/components/providers/ThemeProviderWrapper";

import { routing } from "../../i18n/routing";
import { StyledComponentsRegistry } from "@/lib/registry";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Next.js 15: params is async
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderCustom>
            <ThemeProviderWrapper>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <Navbar />
                {children}
                <Footer />
              </NextIntlClientProvider>
            </ThemeProviderWrapper>
          </ThemeProviderCustom>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
