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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] }
  }
};

export function ResourceSection() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {resources.map((res) => (
        <motion.div
          key={res.id}
          variants={itemVariants}
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
          
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white text-muted-foreground transition-colors mt-auto group-hover:text-white">
            <Download className="w-4 h-4" /> Download
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
}
