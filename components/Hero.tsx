"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[640px] h-[640px] rounded-full bg-violet-700/[0.09] blur-[160px] animate-orb-float" />
        <div className="absolute bottom-1/4 -right-24 w-[520px] h-[520px] rounded-full bg-indigo-600/[0.07] blur-[140px] animate-orb-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-600/[0.04] blur-[100px]" />
      </div>

      {/* ── Grid Pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs tracking-wide font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to full-time roles &amp; research collaborations
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-[clamp(2.8rem,8vw,6rem)] font-extrabold tracking-tight text-white leading-[1.04] mb-5 text-balance"
        >
          Shreya Manjucha
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-[clamp(1.2rem,3.5vw,2rem)] font-light text-zinc-300 mb-5 leading-snug"
        >
          Software Engineer{" "}
          <span className="text-zinc-600 font-light mx-1">·</span>{" "}
          <span className="gradient-text font-semibold">Agentic AI & Data Engineering</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base text-zinc-500 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Building agentic AI systems, LLM pipelines, and data engineering solutions.
          MS CS at{" "}
          <span className="text-zinc-300 font-medium">Purdue University</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)]"
          >
            View Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="mailto:shreyamanjucha0810@gmail.com"
            className="inline-flex items-center px-6 py-2.5 rounded-full border border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/[0.25] text-sm font-medium transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href="/Shreya_Manjucha_Resume.pdf"
            download="Shreya_Manjucha_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] text-zinc-500 hover:text-zinc-200 hover:border-white/[0.18] text-sm font-medium transition-all duration-200"
            aria-label="Download resume PDF"
          >
            <DownloadIcon />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/manjuchashreya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-zinc-200 transition-colors duration-200"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/shreyamanjucha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 hover:text-violet-400 transition-colors duration-200"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:shreyamanjucha0810@gmail.com"
            aria-label="Email"
            className="text-zinc-600 hover:text-violet-400 transition-colors duration-200"
          >
            <EmailIcon />
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-violet-500/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}
