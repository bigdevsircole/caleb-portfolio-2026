"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Shop", href: "#shop" },
  { name: "Resources", href: "#resources" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-1.5 bg-primary/20 rounded-lg">
            <Cpu className="text-primary w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tighter">Caleb Yinusa</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold glow-on-hover transition-all"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
