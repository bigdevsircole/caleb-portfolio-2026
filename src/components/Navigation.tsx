"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Shop", href: "#shop" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 md:top-8 left-0 right-0 z-50 px-4 md:px-6 flex justify-center pointer-events-none">
      <nav className="glass-pill px-4 md:px-6 py-3 flex items-center justify-between md:justify-start gap-4 md:gap-8 pointer-events-auto w-full max-w-4xl">
        <motion.a 
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Cpu className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-sm tracking-tight md:hidden">CY</span>
        </motion.a>
        
        {/* Desktop Links */}
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

        <div className="flex items-center gap-2 ml-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all"
          >
            Work With Me
          </motion.button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border border-white/10 bg-white/5">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-background/95 backdrop-blur-2xl border-white/10 h-fit pb-12">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left flex items-center gap-2">
                   <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <Cpu className="text-black w-4 h-4" />
                  </div>
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold tracking-tight hover:text-muted-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="w-full h-14 rounded-2xl bg-white text-black text-lg font-bold mt-4">
                  Work With Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
