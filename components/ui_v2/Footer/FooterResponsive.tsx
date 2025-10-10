// components/ui_v2/Footer/FooterResponsive.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFooter } from "./useFooter";
import { SOCIALS } from "./footer.data";
import {
  FooterWrapper,
  BrandCol,
  SocialRow,
  NewsletterCol,
  BottomBar,
} from "./Footer.styled";
import { Typography } from "../foundation";

export default function FooterResponsive() {
  // 🌍 Detect locale based on pathname
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  // ✉️ Manage newsletter subscription state
  const { email, setEmail, submitting, status, handleSubmit } = useFooter();

  // 🔗 Load localized footer links dynamically
  const [footerLinks, setFooterLinks] = useState<
    Record<string, { href: string; label: string }[]>
  >({});

  useEffect(() => {
    import(`@/data/content/${locale}/footerLinks.json`)
      .then((mod) => setFooterLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  return (
    <AnimatePresence mode="wait">
      <FooterWrapper
        as={motion.footer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "2rem 1.5rem 1rem",
          textAlign: "center",
        }}
      >
        {/* ===== 🧭 Brand Section ===== */}
        <BrandCol style={{ alignItems: "center" }}>
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

          <Typography
            variant="h3"
            align="center"
            color="primary"
            style={{ marginTop: "0.6rem" }}
          >
            Nomadia Travels
          </Typography>

          <Typography
            variant="body"
            align="center"
            color="muted"
            style={{
              marginTop: "0.4rem",
              maxWidth: "280px",
              marginInline: "auto",
            }}
          >
            {locale === "fr"
              ? "Voyages sur mesure et guides locaux au Kirghizistan."
              : "Curated trips and local guides across Kyrgyzstan."}
          </Typography>

          {/* 🌐 Social Icons */}
          <SocialRow
            style={{
              justifyContent: "center",
              gap: "0.8rem",
              marginTop: "1rem",
              marginBottom: "1.4rem",
            }}
          >
            {SOCIALS.map((s) => (
              <Link key={s.name} href={s.href} aria-label={s.alt}>
                <Image src={s.src} alt={s.alt} width={28} height={28} />
              </Link>
            ))}
          </SocialRow>
        </BrandCol>

        {/* ===== 🔗 Link Sections ===== */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            marginBottom: "1.4rem",
          }}
        >
          {Object.entries(footerLinks).map(([sectionKey, section]) => (
            <div key={sectionKey}>
              <Typography
                variant="h4"
                align="center"
                color="primary"
                style={{ marginBottom: "0.3rem" }}
              >
                {sectionKey}
              </Typography>

              {section.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    marginBottom: "0.2rem",
                  }}
                >
                  <Typography variant="body" align="center" color="muted">
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* ===== 💌 Newsletter ===== */}
        <NewsletterCol
          onSubmit={handleSubmit}
          style={{
            maxWidth: "280px",
            margin: "0 auto",
            marginBottom: "1.5rem",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            color="primary"
            style={{ marginBottom: "0.5rem" }}
          >
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
            style={{
              width: "100%",
              padding: "0.6rem 0.8rem",
              borderRadius: "6px",
              border: "1px solid var(--divider)",
              marginBottom: "0.6rem",
            }}
          />

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.6rem 0",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {submitting
              ? locale === "fr"
                ? "Envoi…"
                : "Sending…"
              : locale === "fr"
                ? "Rejoindre"
                : "Join"}
          </button>

          {status === "ok" && (
            <Typography
              variant="caption"
              align="center"
              color="success"
              style={{ marginTop: "0.4rem" }}
            >
              {locale === "fr" ? "Inscrit avec succès !" : "Subscribed!"}
            </Typography>
          )}

          {status === "err" && (
            <Typography
              variant="caption"
              align="center"
              color="error"
              style={{ marginTop: "0.4rem" }}
            >
              {locale === "fr" ? "Email invalide" : "Invalid email"}
            </Typography>
          )}
        </NewsletterCol>

        {/* ===== ⚙️ Bottom Section ===== */}
        <BottomBar style={{ flexDirection: "column", gap: "0.3rem" }}>
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
    </AnimatePresence>
  );
}
