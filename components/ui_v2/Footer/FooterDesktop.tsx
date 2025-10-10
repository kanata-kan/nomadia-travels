// components/ui_v2/Footer/FooterDesktop.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useFooter } from "./useFooter";
import { SOCIALS } from "./footer.data";
import {
  BrandCol,
  FooterGrid,
  FooterWrapper,
  LinksCol,
  NewsletterCol,
  SocialRow,
  BottomBar,
} from "./Footer.styled";
import { Typography } from "../foundation";

export default function FooterDesktop() {
  // 🌍 Detect current locale from pathname
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  // ✉️ Newsletter logic (email state + submission)
  const { email, setEmail, submitting, status, handleSubmit } = useFooter();

  // 🔗 Dynamic footer links (localized)
  const [footerLinks, setFooterLinks] = useState<
    Record<string, { href: string; label: string }[]>
  >({});

  useEffect(() => {
    import(`@/data/content/${locale}/footerLinks.json`)
      .then((mod) => setFooterLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  return (
    <FooterWrapper
      as={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <FooterGrid>
        {/* 🧭 Brand section */}
        <BrandCol>
          <Image
            src="/images/Logo.png"
            alt="Nomadia Travels Logo"
            width={160}
            height={60}
            priority
            sizes="(max-width: 768px) 120px, 160px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <Typography variant="h3" align="left" color="primary">
            Nomadia Travels
          </Typography>

          <Typography variant="body" align="left" color="muted">
            {locale === "fr"
              ? "Voyages sur mesure et guides locaux au Kirghizistan."
              : "Curated trips and local guides across Kyrgyzstan."}
          </Typography>

          {/* 🌐 Social links */}
          <SocialRow>
            {SOCIALS.map((s) => (
              <Link key={s.name} href={s.href} aria-label={s.alt}>
                <Image src={s.src} alt={s.alt} width={24} height={24} />
              </Link>
            ))}
          </SocialRow>
        </BrandCol>

        {/* 🔗 Dynamic link columns */}
        {Object.entries(footerLinks).map(([sectionKey, section]) => (
          <LinksCol key={sectionKey}>
            <Typography variant="h4" align="left" color="primary">
              {sectionKey}
            </Typography>

            {section.map((link) => (
              <Link key={link.href} href={`/${locale}${link.href}`}>
                <Typography variant="body" align="left" color="muted">
                  {link.label}
                </Typography>
              </Link>
            ))}
          </LinksCol>
        ))}

        {/* 💌 Newsletter subscription */}
        <NewsletterCol onSubmit={handleSubmit}>
          <Typography variant="h4" align="left">
            {locale === "fr" ? "Newsletter" : "Stay Updated"}
          </Typography>

          <input
            type="email"
            placeholder={
              locale === "fr" ? "Entrez votre email" : "Enter your email"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />

          <button type="submit" disabled={submitting}>
            {submitting
              ? locale === "fr"
                ? "Envoi…"
                : "Sending…"
              : locale === "fr"
                ? "Rejoindre"
                : "Join"}
          </button>

          {status === "ok" && (
            <Typography variant="caption" color="success">
              {locale === "fr" ? "Inscrit avec succès !" : "Subscribed!"}
            </Typography>
          )}
          {status === "err" && (
            <Typography variant="caption" color="error">
              {locale === "fr" ? "Email invalide" : "Invalid email"}
            </Typography>
          )}
        </NewsletterCol>
      </FooterGrid>

      {/* ⚙️ Bottom bar */}
      <BottomBar>
        <Typography variant="caption" align="center" color="muted">
          © {new Date().getFullYear()} Nomadia Travels
        </Typography>
        <Typography variant="caption" align="center" color="muted">
          {locale === "fr"
            ? "Construit avec Next.js + styled-components"
            : "Built with Next.js + styled-components"}
        </Typography>
      </BottomBar>
    </FooterWrapper>
  );
}
