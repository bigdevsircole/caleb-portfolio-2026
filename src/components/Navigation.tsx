"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Shop", href: "#shop" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <div className="fixed top-8 left-0 right-0 z-50 px-6 flex justify-center pointer-events-none">
      <nav className="glass-pill px-6 py-3 flex items-center gap-8 pointer-events-auto">
        <motion.a 
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Cpu className="text-black w-5 h-5" />
          </div>
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all"
        >
          Work With Me
        </motion.button>
      </nav>
    </div>
  );
}