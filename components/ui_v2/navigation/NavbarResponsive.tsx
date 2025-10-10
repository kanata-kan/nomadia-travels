"use client";

import { useState, useEffect, useRef } from "react";
import {
  BurgerButton,
  Drawer,
  DrawerHeader,
  DrawerLinks,
  DrawerFooter,
  Overlay,
} from "./Navbar.styled";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "../toggles/ThemeToggleButton/ThemeToggleButton";
import LanguageSwitcher from "../toggles/LanguageSwitcher/LanguageSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";

/* 📱 NavbarResponsive Component
   ------------------------------------------------------------
   This component handles the mobile/tablet version of the Navbar.
   - Toggles a drawer menu (open/close)
   - Closes when clicking outside or on a link
   - Contains localized nav links, theme, and language controls
*/

export default function NavbarResponsive({ scrolled }: { scrolled?: boolean }) {
  /* 🎛️ Drawer open/close state */
  const [open, setOpen] = useState(false);

  /* 🌍 Detect current locale (from URL path) */
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "fr" ? "fr" : "en";

  /* 🧩 State for storing localized navigation links */
  const [navLinks, setNavLinks] = useState<{ label: string; href: string }[]>(
    [],
  );

  /* 🧱 Reference for detecting clicks outside the drawer */
  const drawerRef = useRef<HTMLDivElement>(null);

  // ----------------------------------------------------------
  // 📦 Dynamic import of navLinks.json (per locale)
  // ----------------------------------------------------------
  useEffect(() => {
    import(`@/data/content/${locale}/navLinks.json`)
      .then((mod) => setNavLinks(mod.default))
      .catch(console.error);
  }, [locale]);

  // ----------------------------------------------------------
  // 🧭 Handle click outside the drawer → close it automatically
  // ----------------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    // Cleanup to avoid memory leaks
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // ----------------------------------------------------------
  // 🎨 Render Section
  // ----------------------------------------------------------
  return (
    <>
      {/* 🍔 Burger Button (visible only when drawer is closed) */}
      {!open && (
        <BurgerButton
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: "1.2rem",
            right: "1.3rem",
            zIndex: 11000,
          }}
        >
          ☰
        </BurgerButton>
      )}

      {/* 🪄 AnimatePresence controls mount/unmount animation */}
      <AnimatePresence>
        {open && (
          <>
            {/* 🌫️ Semi-transparent overlay behind the drawer */}
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)} // click overlay → close drawer
            />

            {/* 📦 The main Drawer container */}
            <Drawer
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* 🧭 Drawer Header */}
              <DrawerHeader>
                <div className="header-content">
                  <h2>Nomadia Travels</h2>
                  <span>Explore Kyrgyzstan</span>
                </div>
                {/* ❌ Close button */}
                <button onClick={() => setOpen(false)} className="close-btn">
                  ✕
                </button>
              </DrawerHeader>

              {/* 🔗 Drawer Links (animated entrance one-by-one) */}
              <DrawerLinks>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/${locale}${link.href}`}
                      onClick={() => setOpen(false)} // clicking a link closes the drawer
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </DrawerLinks>

              {/* ⚙️ Drawer Footer */}
              <DrawerFooter>
                <div className="footer-inner">
                  <ThemeToggleButton /> {/* 🌗 Switch theme */}
                  <LanguageSwitcher /> {/* 🌍 Switch language */}
                </div>
                <p>© 2025 Nomadia Travels</p>
              </DrawerFooter>
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
