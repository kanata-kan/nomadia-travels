"use client";

import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import { Nav, Brand, Links, Actions } from "./Navbar.styled";
import LanguageSwitcher from "./LanguageSwitcher";
import navLinks from "@/data/navLinks.json";

export default function NavbarDesktop() {
  return (
    <Nav>
      <Brand>
        <span>EXPLORE KYRGYZSTAN</span>
        <span>by Nomadia Travels</span>
      </Brand>

      <Links>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
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
