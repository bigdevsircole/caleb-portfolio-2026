"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "1",
    title: "Caleb Bank",
    category: "Mobile Banking Dashboard",
    image: "https://drive.google.com/uc?export=view&id=1EcXJVTa8hCOds1B6_G0TFULu8GK3w1i1",
    link: "https://mobile-banking-dashboard.vercel.app/",
    useModal: false,
  },
  {
    id: "2",
    title: "BraveCard",
    category: "Digital Identity Platform",
    image: "https://drive.google.com/uc?export=view&id=1KJ9Ryf1-12xYSfPeLfs-V1U_vZrt49Bp",
    link: "https://bravecard.vercel.app/",
    useModal: false,
  },
  {
    id: "3",
    title: "Berrybby",
    category: "E-commerce",
    image: "https://drive.google.com/uc?export=view&id=12ia_yGU5Byf-_-zR0MNnMvzgK6z0ItQn",
    link: "#",
    useModal: false,
  },
  {
    id: "4",
    title: "WA Direct Message",
    category: "WhatsApp Messaging App",
    image: "https://drive.google.com/uc?export=view&id=1eGJj52zs5YDj0AOb_n_VD1dHLi5PdMTk",
    link: "https://whatsapp-msg-one.vercel.app/",
    useModal: false,
  },
  {
    id: "5",
    title: "Orion Manager",
    category: "Privacy Control App",
    image: "https://picsum.photos/seed/56/800/600",
    link: "#",
    useModal: false,
  },
  {
    id: "6",
    title: "Pulse Health",
    category: "Medical Management",
    image: "https://picsum.photos/seed/88/800/600",
    link: "#",
    useModal: false,
  },
  {
    id: "7",
    title: "Zenith AI",
    category: "Content Automation",
    image: "https://picsum.photos/seed/99/800/600",
    link: "#",
    useModal: false,
  },
  {
    id: "8",
    title: "Lumina CRM",
    category: "Enterprise Relations",
    image: "https://picsum.photos/seed/101/800/600",
    link: "#",
    useModal: false,
  },
  {
    id: "9",
    title: "Solaris",
    category: "Energy Monitoring",
    image: "https://picsum.photos/seed/112/800/600",
    link: "#",
    useModal: false,
  }
];

export function ProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {projects.map((project, index) => {
        const ProjectCard = (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 card-hover cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className={`relative w-full overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="minimalist project showcase"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 opacity-60 group-hover:opacity-70" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-widest mb-2 block text-white/60 drop-shadow-md">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
              
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl ${index === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        );

        if (project.useModal) {
          return (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                {ProjectCard}
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-background border-white/10 overflow-hidden flex flex-col">
                <DialogHeader className="p-4 border-b border-white/5 flex flex-row items-center justify-between space-y-0">
                  <DialogTitle className="text-lg font-bold uppercase tracking-widest">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 w-full relative bg-white/5">
                  <iframe 
                    src={project.link} 
                    className="w-full h-full border-none"
                    title={project.title}
                  />
                </div>
              </DialogContent>
            </Dialog>
          );
        }

        const isExternal = project.link.startsWith('http');

        return (
          <a 
            key={project.id} 
            href={project.link} 
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={index === 0 ? 'md:col-span-2' : ''}
          >
            {ProjectCard}
          </a>
        );
      })}
    </div>
  );
}
