"use client";

import { motion } from "framer-motion";
import { Download, FileCode, Palette, Zap } from "lucide-react";

const resources = [
  {
    id: "r1",
    title: "Tailwind Library",
    type: "Components",
    icon: FileCode,
  },
  {
    id: "r2",
    title: "Design System",
    type: "Figma",
    icon: Palette,
  },
  {
    id: "r3",
    title: "Next.js Boilerplate",
    type: "Stack",
    icon: Zap,
  }
];

export function ResourceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {resources.map((res, index) => (
        <motion.div
          key={res.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] card-hover flex flex-col gap-8"
        >
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <res.icon className="w-6 h-6" />
          </div>
          
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 block">
              {res.type}
            </span>
            <h4 className="text-xl font-bold">{res.title}</h4>
          </div>
          
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white text-muted-foreground transition-colors mt-auto">
            <Download className="w-4 h-4" /> Download
          </button>
        </motion.div>
      ))}
    </div>
  );
}