"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Caleb Bank",
    category: "Mobile Banking Dashboard",
    image: "https://drive.google.com/uc?id=1KV1aWxu5NMYZ2t_znz-jt25_zONN4KEN",
    link: "https://mobile-banking-dashboard.vercel.app/",
  },
  {
    id: "2",
    title: "BraveCard",
    category: "Digital Identity Platform",
    image: "https://drive.google.com/uc?id=1KJ9Ryf1-12xYSfPeLfs-V1U_vZrt49Bp",
    link: "https://bravecard.vercel.app/",
  },
  {
    id: "3",
    title: "Berrybby",
    category: "E-commerce",
    image: "https://picsum.photos/seed/125/600/400",
    link: "#",
  },
  {
    id: "4",
    title: "WA Direct Message",
    category: "WhatsApp Messaging App",
    image: "https://drive.google.com/uc?id=1eGJj52zs5YDj0AOb_n_VD1dHLi5PdMTk",
    link: "https://whatsapp-msg-one.vercel.app/",
  },
  {
    id: "5",
    title: "Orion Manager",
    category: "Privacy Control App",
    image: "https://drive.google.com/uc?id=1DRGMrL240DavTmIrQXSY6tTNntsmu3vd",
    link: "https://orion-manager.vercel.app/",
  },
  {
    id: "6",
    title: "Rhoda Delight",
    category: "Food Website",
    image: "https://drive.google.com/uc?id=1m9b6r36mGA3CZQqZ2n8ZIv3LpoetbUd5",
    link: "#",
  },
  {
    id: "7",
    title: "Bàtà Gidi",
    category: "Hand-Crafted Footwear",
    image: "https://drive.google.com/uc?id=1vCn9CfDnAZKcu3UuBqTiN12ejFbWEQ6x",
    link: "https://bata-gidi.vercel.app/",
  },
  {
    id: "8",
    title: "QR Code Generator",
    category: "QR Generator App",
    image: "https://drive.google.com/uc?id=1qxZD9osYwhJ5fC-dxvuWlzYyTy5f95mh",
    link: "#",
  },
  {
    id: "9",
    title: "Shinar 930",
    category: "Portfolio",
    image: "https://drive.google.com/uc?id=1Rz85uKtStAOL4HCMvMYxuQmGMEWICvst",
    link: "https://shinar930.vercel.app/",
  }
];

export function ProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      {projects.map((project, index) => {
        const isExternal = project.link.startsWith('http');
        const isGoogleDrive = project.image.includes('drive.google.com');
        
        return (
          <a 
            key={project.id} 
            href={project.link} 
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 hover:border-primary/50 hover:bg-primary/[0.03] ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className={`relative w-full overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized={isGoogleDrive}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
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
              
              <div className="w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl bg-white text-black">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
