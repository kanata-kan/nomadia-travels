// components/ui_v2/navigation/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarResponsive from "./NavbarResponsive";
import { AnimatePresence, motion, useScroll } from "framer-motion";

/* 🌐 Main Navbar Controller
   ----------------------------------------------------
   This component intelligently switches between:
   - 🖥️ NavbarDesktop (for large screens)
   - 📱 NavbarResponsive (for mobile & tablet)
   It also reacts to scrolling to trigger visual effects.
*/

export default function Navbar() {
  /* 📏 State: Track whether we're on mobile view */
  const [isMobile, setIsMobile] = useState(false);

  /* 🧭 State: Detect scroll position (used for background change, blur, etc.) */
  const [scrolled, setScrolled] = useState(false);

  /* 🪄 Framer Motion’s scroll listener hook */
  const { scrollY } = useScroll();

  // 🔍 Watch scrolling and toggle visual state after 40px
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 40); // 👇 Navbar changes style after scrolling 40px
    });
    return () => unsubscribe();
  }, [scrollY]);

  // 📱 Detect screen size to switch between Desktop / Mobile nav
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // <1024px = Mobile mode
    handleResize(); // ✅ Run immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    /* ✨ AnimatePresence = handles smooth entry/exit animations */
    <AnimatePresence mode="wait">
      <motion.div
        key={isMobile ? "mobile" : "desktop"} // unique key triggers re-render with animation
        initial={{ opacity: 0, y: -10 }} // fade + slight lift on mount
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }} // fade out when switching modes
        transition={{ duration: 0.25 }} // quick, subtle animation
      >
        {/* 🎯 Conditional Rendering: only one Navbar version at a time */}
        {isMobile ? (
          <NavbarResponsive scrolled={scrolled} /> // 📱 Mobile Drawer + Burger button
        ) : (
          <NavbarDesktop scrolled={scrolled} /> // 🖥️ Standard top navigation bar
        )}
      </motion.div>
    </AnimatePresence>
  );
}
