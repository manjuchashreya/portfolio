"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-y border-white/[0.05] bg-[#0d0d1f]/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/[0.05]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:px-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-3xl sm:text-4xl font-bold mb-1">
                <span className="gradient-text">{stat.value}</span>
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
