// components/ui_v2/Footer/Footer.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// 🧠 Lazy-loaded components (performance boost)
const FooterDesktop = dynamic(() => import("./FooterDesktop"), { ssr: false });
const FooterResponsive = dynamic(() => import("./FooterResponsive"), {
  ssr: false,
});

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 📱 detect window width on client
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ⚙️ render the proper version
  return isMobile ? <FooterResponsive /> : <FooterDesktop />;
}
