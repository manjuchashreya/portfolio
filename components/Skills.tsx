"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  const entries = Object.entries(skillGroups);

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-3 font-medium">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {entries.map(([category, skills], i) => (
            <motion.div
              key={category}
              className="rounded-2xl border border-white/[0.06] bg-[#0f0f1e] p-6 card-glow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-xs font-semibold text-violet-400/80 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-300 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full hover:bg-violet-500/[0.08] hover:border-violet-500/[0.18] hover:text-violet-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
