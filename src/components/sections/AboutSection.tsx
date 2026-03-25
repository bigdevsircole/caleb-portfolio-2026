"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const stats = [
    { label: "Experience", value: "8+ Years" },
    { label: "Projects", value: "150+ Done" },
    { label: "Frontend", value: "Next.js / TS / Tailwind" },
    { label: "Backend", value: "Firebase / Node" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0.3, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6"
      >
        <p className="text-xl md:text-3xl font-medium leading-tight text-white">
          Every business has a bottleneck. My job is to make sure <span className="text-muted-foreground italic">technology isn’t yours</span>.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          As a Digital Solutions Architect, I bridge the gap between complex business challenges and scalable tech solutions. Whether you are looking to streamline operations, automate processes, or build a robust digital infrastructure from the ground up, I'm here to help you navigate it.
        </p>
        <motion.p 
          initial={{ opacity: 0.5, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-white font-medium border-l-2 border-white/20 pl-4 py-2"
        >
          What digital challenge is slowing your business down right now?
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0.3, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 card-hover"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2">{stat.label}</span>
            <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
