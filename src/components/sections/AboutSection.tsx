"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Lightbulb, TrendingUp } from "lucide-react";

export function AboutSection() {
  const focuses = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Rapid Growth & Eager Learning",
      description: "Since starting my frontend developer path in 2024, I have dedicated myself to mastering modern frameworks, UI architecture, and best practices. I'm constantly learning to stay at the cutting edge."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Open Collaboration",
      description: "I believe great software is built through collaboration. I'm looking to work with other developers, designers, and business minds to build impactful projects."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Filling Industry Gaps",
      description: "My ultimate goal is to build software solutions that address real-world needs and bridge gaps in efficiency, accessibility, and automation across any industry."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
      <motion.div
        initial={{ opacity: 0.8, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 space-y-6"
      >
        <p className="text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
          Crafting modern, responsive, and high-performance user interfaces.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
          I started my journey as a dedicated frontend developer in 2024. Since then, I have been growing rapidly, absorbing new concepts, and coding daily. I aim to take on as many challenging projects as possible to push my boundaries and write clean, robust code.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
          Whether it is building custom SaaS apps, landing pages, or complex web applications, I focus on creating digital solutions that bridge the gap between design vision and high-quality engineering.
        </p>
      </motion.div>
      
      <div className="lg:col-span-7 flex flex-col gap-6">
        {focuses.map((focus, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.8, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {focus.icon}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                {focus.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {focus.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
