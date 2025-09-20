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
              src={Logo} // مسار الصورة
              alt="Explore Kyrgyzstan logo" // وصف مناسب
              width={160}
              height={64}
              priority // ✅ أهم سطر
              fetchPriority="high" // (اختياري) يدعم المتصفحات الحديثة
              sizes="120px" // (اختياري) بما أنها أيقونة ثابتة
            />
          </div>
          <div className="brand-title">EXPLORE KYRGYZSTAN</div>
          <div className="brand-sub">
            Nomadia Travels — curated trips and local guides across Kyrgyzstan.
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
        <LinksCol>
          <h4>Company</h4>
          {footerLinks.company.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </LinksCol>

        <LinksCol>
          <h4>Support</h4>
          {footerLinks.support.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </LinksCol>

        <LinksCol>
          <h4>Legal</h4>
          {footerLinks.legal.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Newsletter onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              placeholder="your@email.com"
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Joining…" : "Join"}
            </button>
            {status === "ok" && <div className="note success">Subscribed!</div>}
            {status === "err" && (
              <div className="note error">Invalid email</div>
            )}
          </Newsletter>
        </LinksCol>
      </FooterGrid>

      <BottomRow>
        <div>© {new Date().getFullYear()} Nomadia Travels</div>
        <div>Built with Next.js + styled-components</div>
      </BottomRow>
    </FooterWrap>
  );
}
