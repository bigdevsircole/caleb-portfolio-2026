
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "1",
    title: "Quantum Dashboard",
    description: "A high-performance real-time analytics platform built with Next.js and Tailwind.",
    image: PlaceHolderImages[0].imageUrl,
    link: "#",
    tech: ["React", "Firebase", "Recharts"]
  },
  {
    id: "2",
    title: "Nebula Mobile",
    description: "Cross-platform mobile application for secure crypto asset management.",
    image: PlaceHolderImages[1].imageUrl,
    link: "#",
    tech: ["React Native", "Tailwind", "Firebase"]
  },
  {
    id: "3",
    title: "EcoSphere Commerce",
    description: "Sustainable e-commerce solution focused on zero-carbon shipping logistics.",
    image: PlaceHolderImages[2].imageUrl,
    link: "#",
    tech: ["TypeScript", "Prisma", "Next.js"]
  }
];

export function ProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              data-ai-hint="project screenshot"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
               <motion.button 
                 whileTap={{ scale: 0.9 }}
                 className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors"
               >
                 <Github className="w-5 h-5" />
               </motion.button>
               <motion.button 
                 whileTap={{ scale: 0.9 }}
                 className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors"
               >
                 <ExternalLink className="w-5 h-5" />
               </motion.button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
              {project.description}
            </p>
            <Button variant="link" className="p-0 text-primary h-auto group-hover:translate-x-1 transition-transform">
              Learn more <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

import { ArrowRight } from "lucide-react";
