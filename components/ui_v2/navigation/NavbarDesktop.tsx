// components/ui_v2/navigation/NavbarDesktop.tsx
"use client";

import { useEffect, useState } from "react";
import { NavbarWrapper, Brand, NavLinks } from "./Navbar.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../toggles/ThemeToggleButton/ThemeToggleButton";
import LanguageSwitcher from "../toggles/LanguageSwitcher/LanguageSwitcher";

/* 🖥️ NavbarDesktop Component
   ------------------------------------------------------------
   Displays the desktop version of the navigation bar.
   - Fetches localized links dynamically (EN / FR)
   - Reacts to scrolling (via `scrolled` prop)
   - Contains brand, nav links, and action toggles (theme/lang)
*/

export default function NavbarDesktop({ scrolled }: { scrolled?: boolean }) {
  /* 🌍 Get current locale from the active path (en or fr) */
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  /* 📁 State: Holds the navigation links imported dynamically */
  const [navLinks, setNavLinks] = useState<{ label: string; href: string }[]>(
    [],
  );

  /* 🧩 Load localized navigation links when locale changes */
  useEffect(() => {
    import(`@/data/content/${locale}/navLinks.json`)
      .then((mod) => setNavLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  // ----------------------------------------------------------
  // 🎨 Render: Desktop Navbar layout
  // ----------------------------------------------------------
  return (
    <NavbarWrapper
      $scrolled={scrolled} // triggers visual style changes when user scrolls
      initial={{ y: -50, opacity: 0 }} // entrance animation
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* 🧭 Brand section */}
      <Brand>
        <span>EXPLORE KYRGYZSTAN</span>
        <span>by Nomadia Travels</span>
      </Brand>

      {/* 🔗 Navigation Links (mapped from navLinks.json) */}
      <NavLinks>
        {navLinks.map((link) => (
          <Link key={link.href} href={`/${locale}${link.href}`}>
            {link.label}
          </Link>
        ))}
      </NavLinks>

      {/* ⚙️ Utility actions: Theme + Language toggles */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <ThemeToggleButton /> {/* 🌙 / ☀️ Toggle */}
        <LanguageSwitcher /> {/* 🇬🇧 / 🇫🇷 Switcher */}
      </div>
    </NavbarWrapper>
  );
}
