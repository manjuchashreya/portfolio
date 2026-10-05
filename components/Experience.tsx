"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
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
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="md:grid md:grid-cols-[28px_1fr] md:gap-8"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* ── Timeline track ── */}
              <div className="hidden md:flex flex-col items-center">
                <div className="mt-[22px] w-2.5 h-2.5 rounded-full border-2 border-violet-500 bg-[#0a0a14] shadow-[0_0_8px_rgba(167,139,250,0.45)] z-10 shrink-0" />
                {i < experiences.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-violet-500/25 to-violet-500/[0.04] mt-2" />
                )}
              </div>

              {/* ── Card ── */}
              <div className="rounded-2xl border border-white/[0.06] bg-[#0f0f1e] p-6 card-glow group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-violet-200 transition-colors duration-200 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {exp.company}
                      <span className="mx-1.5 text-zinc-600" aria-hidden="true">·</span>
                      {exp.location}
                    </p>
                  </div>
                  <span className="shrink-0 self-start text-xs text-zinc-500 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-violet-300/80 bg-violet-500/[0.07] border border-violet-500/[0.12] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* ── Education cards ── */}
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="md:grid md:grid-cols-[28px_1fr] md:gap-8"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (experiences.length + i) * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="hidden md:flex flex-col items-center">
                <div className="mt-[22px] w-2.5 h-2.5 rounded-full border-2 border-indigo-400/70 bg-[#0a0a14] shadow-[0_0_8px_rgba(129,140,248,0.35)] z-10 shrink-0" />
                {i < education.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-indigo-500/25 to-indigo-500/[0.04] mt-2" />
                )}
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#0f0f1e] p-6 card-glow group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-indigo-400/80 uppercase tracking-widest font-medium">
                        Education
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">
                      {edu.school}
                      <span className="mx-1.5 text-zinc-600" aria-hidden="true">·</span>
                      {edu.location}
                    </p>
                    {edu.detail && (
                      <p className="text-sm text-zinc-400 mt-1.5 font-medium">{edu.detail}</p>
                    )}
                  </div>
                  <span className="shrink-0 self-start text-xs text-zinc-500 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                {edu.coursework.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                    <span className="text-xs text-zinc-400 mr-1 self-center">Coursework:</span>
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs text-indigo-300/80 bg-indigo-500/[0.06] border border-indigo-500/[0.1] px-2.5 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
