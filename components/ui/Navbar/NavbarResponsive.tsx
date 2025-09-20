"use client";

import { useState } from "react";
import {
  Overlay,
  Drawer,
  DrawerHeader,
  DrawerSection,
  DrawerLink,
  DrawerFooter,
} from "./Navbar.styled";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";
import navLinks from "@/data/navLinks.json";

export default function NavbarResponsive() {
  const [open, setOpen] = useState(false);

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
          marginLeft: "auto", // يجعل الزر على اليمين
          padding: "0.5rem 1rem",
        }}
      >
        ☰
      </button>

      {/* === Overlay خلفية سوداء نصف شفافة لما يفتح المينيو === */}
      <Overlay $open={open} onClick={handleClose} />

      {/* === Drawer القائمة المنسدلة === */}
      <Drawer $open={open}>
        <div>
          {/* Header داخل Drawer */}
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

          {/* Links داخل Drawer */}
          <DrawerSection>
            {navLinks.map((link, i) => (
              <DrawerLink
                key={link.href}
                href={link.href}
                onClick={handleClose}
                style={{ "--i": i } as React.CSSProperties}
              >
                {link.label}
              </DrawerLink>
            ))}
          </DrawerSection>
        </div>

        {/* Footer داخل Drawer */}
        <DrawerFooter>
          <ThemeToggleButton />
          <LanguageSwitcher />
          <p style={{ marginTop: "1rem" }}>© 2025 Nomadia Travels</p>
        </DrawerFooter>
      </Drawer>
    </>
  );
}
