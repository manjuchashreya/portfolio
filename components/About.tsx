"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    label: "Agentic AI",
    heading: "MCP, Bedrock & LangGraph",
    body: "Built AWS Bedrock pipelines and MCP servers at HERE Technologies — concept to production in 12 days. Built LangGraph orchestration in research. Agentic systems that work.",
  },
  {
    label: "Data Engineering",
    heading: "Pipelines at scale",
    body: "Azure Synapse, Databricks, and Athena pipelines processing 1M+ records daily. Data infrastructure is the backbone of every AI system I build.",
  },
  {
    label: "Research & Impact",
    heading: "Published & award-winning",
    body: "IEEE Xplore published. First place at Smart India Hackathon 2022. Social Impact Award, Purdue 2026. GPA 3.95 at Purdue University.",
  },
];

export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ── USP Statement ── */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-5 font-medium">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] mb-6 text-balance">
            I build agentic AI systems —{" "}
            <span className="gradient-text">from concept to working POC</span>{" "}
            in days.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            At HERE Technologies I built an AWS Bedrock pipeline improving commentary accuracy from
            70% to 90%, and an MCP server that lets Amazon QuickSight query a 26M+ row database
            in natural language — concept to POC in 12 days. At Purdue&apos;s NEXIS Lab I research
            multimodal AI. The rigor that drives research is the same instinct that makes
            production systems reliable.
          </p>
        </motion.div>

        {/* ── Differentiator cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.label}
              className="rounded-2xl border border-white/[0.06] bg-[#0f0f1e] p-6 card-glow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs text-violet-400/80 uppercase tracking-widest mb-3 font-medium">
                {d.label}
              </p>
              <h3 className="text-sm font-semibold text-white mb-2 leading-snug">
                {d.heading}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
