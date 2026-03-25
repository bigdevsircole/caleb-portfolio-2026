"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16 relative z-10"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          {title}
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      {subtitle && (
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-white">
          {subtitle}
        </h3>
      )}
    </motion.div>
  );
}
