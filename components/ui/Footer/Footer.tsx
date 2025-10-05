"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.png";
import { useFooter } from "./useFooter";
import { SOCIALS } from "./footer.data";
import {
  FooterWrap,
  FooterGrid,
  BrandCol,
  LinksCol,
  Newsletter,
  SocialRow,
  BottomRow,
} from "./Footer.styled";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const { email, setEmail, status, submitting, handleSubmit } = useFooter();
  const [footerLinks, setFooterLinks] = useState<
    Record<string, { href: string; label: string }[]>
  >({});
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  // ✅ Load localized footer links dynamically
  useEffect(() => {
    import(`@/data/content/${locale}/footerLinks.json`)
      .then((mod) => setFooterLinks(mod.default))
      .catch((err) => console.error("❌ Footer JSON load failed:", err));
  }, [locale]);

  return (
    <FooterWrap>
      <FooterGrid>
        {/* === Brand Section === */}
        <BrandCol>
          <div className="logo">
            <Image
              src={Logo}
              alt="Nomadia Travels logo"
              width={160}
              height={64}
              priority
              fetchPriority="high"
              sizes="120px"
            />
          </div>
          <div className="brand-title">Nomadia Travels</div>
          <div className="brand-sub">
            {locale === "fr"
              ? "Voyages sur mesure et guides locaux au Kirghizistan."
              : "Curated trips and local guides across Kyrgyzstan."}
          </div>

          <SocialRow>
            {SOCIALS.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="icon"
                aria-label={s.alt}
              >
                <Image src={s.src} alt={s.alt} width={28} height={28} />
              </Link>
            ))}
          </SocialRow>
        </BrandCol>

        {/* === Footer Links === */}
        {Object.entries(footerLinks).map(([sectionKey, section]) => (
          <LinksCol key={sectionKey}>
            <h4>{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}</h4>
            {section.map((link) => (
              <Link key={link.href} href={`/${locale}${link.href}`}>
                {link.label}
              </Link>
            ))}
          </LinksCol>
        ))}

        {/* === Newsletter Section === */}
        <Newsletter onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            placeholder={
              locale === "fr" ? "Entrez votre email" : "Enter your email"
            }
          />
          <button type="submit" disabled={submitting}>
            {submitting
              ? locale === "fr"
                ? "Inscription…"
                : "Joining…"
              : locale === "fr"
                ? "Rejoindre"
                : "Join"}
          </button>

          {status === "ok" && (
            <div className="note success">
              {locale === "fr" ? "Inscrit !" : "Subscribed!"}
            </div>
          )}
          {status === "err" && (
            <div className="note error">
              {locale === "fr" ? "Email invalide" : "Invalid email"}
            </div>
          )}
        </Newsletter>
      </FooterGrid>

      {/* === Bottom Row === */}
      <BottomRow>
        <div>© {new Date().getFullYear()} Nomadia Travels</div>
        <div>
          {locale === "fr"
            ? "Construit avec Next.js + styled-components"
            : "Built with Next.js + styled-components"}
        </div>
      </BottomRow>
    </FooterWrap>
  );
}
