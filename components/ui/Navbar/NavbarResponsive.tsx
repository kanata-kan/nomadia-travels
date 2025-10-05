"use client";

import { useState, useEffect } from "react";
import {
  Overlay,
  Drawer,
  DrawerHeader,
  DrawerSection,
  DrawerLink,
  DrawerFooter,
} from "./Navbar.styled";
import ThemeToggleButton from "../TimeSwitcher/ThemeToggleButton";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function NavbarResponsive() {
  const [open, setOpen] = useState(false);
  const [navLinks, setNavLinks] = useState<{ label: string; href: string }[]>(
    [],
  );

  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en"; // ✅ تحديد اللغة حسب المسار

  useEffect(() => {
    import(`@/data/content/${locale}/navLinks.json`)
      .then((mod) => setNavLinks(mod.default))
      .catch((err) => console.error("❌ Navbar JSON load failed:", err));
  }, [locale]);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* === Burger button (always visible on mobile) === */}
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          marginLeft: "auto",
          padding: "0.5rem 1rem",
        }}
      >
        ☰
      </button>

      {/* === Overlay (black transparent background) === */}
      <Overlay $open={open} onClick={handleClose} />

      {/* === Drawer === */}
      <Drawer $open={open}>
        <div>
          {/* Header */}
          <DrawerHeader>
            <span>EXPLORE KYRGYZSTAN</span>
            <button
              onClick={handleClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </DrawerHeader>

          {/* Links */}
          <DrawerSection>
            {navLinks.map((link, i) => (
              <DrawerLink
                key={link.href}
                href={`/${locale}${link.href}`} // ✅ يدعم /en أو /fr
                onClick={handleClose}
                style={{ "--i": i } as React.CSSProperties}
              >
                {link.label}
              </DrawerLink>
            ))}
          </DrawerSection>
        </div>

        {/* Footer */}
        <DrawerFooter>
          <ThemeToggleButton />
          <LanguageSwitcher />
          <p style={{ marginTop: "1rem" }}>© 2025 Nomadia Travels</p>
        </DrawerFooter>
      </Drawer>
    </>
  );
}
