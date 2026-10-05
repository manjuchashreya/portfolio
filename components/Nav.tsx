"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a14]/85 backdrop-blur-xl border-b border-white/[0.05]"
          : ""
      }`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-white text-lg tracking-tight hover:text-violet-300 transition-colors duration-200"
        >
          SM
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:shreyamanjucha0810@gmail.com"
          className="hidden md:inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border border-white/[0.1] text-zinc-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/[0.06] transition-all duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available
        </a>
      </nav>
    </motion.header>
  );
}
