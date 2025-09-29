"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.png";
import footerLinks from "@/data/footerLinks.json";
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

export default function Footer() {
  const { email, setEmail, status, submitting, handleSubmit } = useFooter();

  return (
    <FooterWrap>
      <FooterGrid>
        {/* Brand */}
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
            Curated trips and local guides across Kyrgyzstan.
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

        {/* Links */}
        {Object.entries(footerLinks).map(([sectionKey, section]) => (
          <LinksCol key={sectionKey}>
            <h4>{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}</h4>
            {section.map((link: { href: string; label: string }) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </LinksCol>
        ))}

        {/* Newsletter */}
        <Newsletter onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            placeholder="Enter your email"
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Joining…" : "Join"}
          </button>
          {status === "ok" && <div className="note success">Subscribed!</div>}
          {status === "err" && <div className="note error">Invalid email</div>}
        </Newsletter>
      </FooterGrid>

      <BottomRow>
        <div>© {new Date().getFullYear()} Nomadia Travels</div>
        <div>Built with Next.js + styled-components</div>
      </BottomRow>
    </FooterWrap>
  );
}
