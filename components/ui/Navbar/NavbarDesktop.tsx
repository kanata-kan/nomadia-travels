"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggleButton from "../TimeSwitcher/ThemeToggleButton";
import { Nav, Brand, Links, Actions } from "./Navbar.styled";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function NavbarDesktop() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en"; // ✅ تحديد اللغة من المسار

  const [navLinks, setNavLinks] = useState<{ label: string; href: string }[]>(
    [],
  );

  useEffect(() => {
    import(`@/data/content/${locale}/navLinks.json`)
      .then((mod) => setNavLinks(mod.default))
      .catch((err) => console.error("❌ Navbar JSON load failed:", err));
  }, [locale]);

  return (
    <Nav>
      <Brand>
        <span>EXPLORE KYRGYZSTAN</span>
        <span>by Nomadia Travels</span>
      </Brand>

      <Links>
        {navLinks.map((link) => (
          <Link key={link.href} href={`/${locale}${link.href}`}>
            {link.label}
          </Link>
        ))}
      </Links>

      <Actions>
        <ThemeToggleButton />
        <LanguageSwitcher />
      </Actions>
    </Nav>
  );
}
