"use client";

import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/manjuchashreya",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shreyamanjucha",
    external: true,
  },
  {
    label: "shreyamanjucha0810@gmail.com",
    href: "mailto:shreyamanjucha0810@gmail.com",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.05] bg-[#0d0d1f]/50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s build something together.
          </h2>
          <p className="text-zinc-500 mb-10 max-w-sm mx-auto text-sm leading-relaxed">
            Open to full-time engineering roles, AI research collaborations, and
            interesting conversations.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:shreyamanjucha0810@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_32px_rgba(139,92,246,0.35)] mb-14"
          >
            Say Hello
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/[0.06] mx-auto mb-8" />

          {/* Copyright */}
          <p className="text-xs text-zinc-700">
            © 2026 Shreya Manjucha &nbsp;·&nbsp; Chicago, IL
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
