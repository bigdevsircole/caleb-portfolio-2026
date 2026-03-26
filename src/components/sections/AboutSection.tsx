
"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    { label: "Experience", value: "8+ Years" },
    { label: "Project Delivery", value: "150+ High-Impact" },
    { label: "Core Stack", value: "React / Next.js / TS" },
    { label: "Architecture", value: "Firebase / Node.js" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        className="space-y-6"
      >
        <p className="text-xl md:text-3xl font-medium leading-tight text-white">
          Crafting seamless digital experiences where <span className="text-primary">performance</span> meets <span className="text-muted-foreground italic">pixel-perfect design</span>.
        </p>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            As a Senior Frontend Developer, I specialize in building high-performance, scalable web applications that drive business value. I bridge the gap between complex design visions and robust technical implementation, ensuring every interaction is fluid and every component is optimized.
          </p>
          <p>
            My philosophy is simple: technology should be an accelerator, not a constraint. I focus on modern architectural patterns, accessibility, and clean, maintainable code to help brands scale their digital presence without technical friction.
          </p>
        </div>
        <div className="text-lg text-white font-medium border-l-2 border-primary/50 pl-4 py-2 bg-primary/5 rounded-r-lg">
          Transforming complex challenges into elegant, production-ready solutions.
        </div>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            className="p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 card-hover group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2 group-hover:text-primary transition-colors">
              {stat.label}
            </span>
            <span className="text-xl md:text-2xl font-bold text-white">
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
