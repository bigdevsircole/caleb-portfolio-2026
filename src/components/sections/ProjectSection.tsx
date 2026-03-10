"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "1",
    title: "Quantum Dashboard",
    category: "Web Application",
    image: PlaceHolderImages[0].imageUrl,
    link: "#",
  },
  {
    id: "2",
    title: "Nebula Mobile",
    category: "Mobile UI/UX",
    image: PlaceHolderImages[1].imageUrl,
    link: "#",
  },
  {
    id: "3",
    title: "EcoSphere",
    category: "E-commerce",
    image: PlaceHolderImages[2].imageUrl,
    link: "#",
  }
];

export function ProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => (
        <motion.a
          key={project.id}
          href={project.link}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
          viewport={{ once: true }}
          className={`group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 card-hover ${index === 0 ? 'md:col-span-2' : ''}`}
        >
          <div className={`relative w-full overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint="minimalist project showcase"
            />
            {/* Reduced overlay opacity for the first project to ensure black text is visible */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${index === 0 ? 'opacity-10 group-hover:opacity-20' : 'opacity-60'}`} />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
            <div>
              <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${index === 0 ? 'text-black/70' : 'text-white/60'}`}>
                {project.category}
              </span>
              <h3 className={`text-3xl font-bold ${index === 0 ? 'text-black' : 'text-white'}`}>
                {project.title}
              </h3>
            </div>
            
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl ${index === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
