"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Shop", href: "#shop" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const cvUrl = "https://docs.google.com/document/d/1yp6g2J-M7s3km0KJp8-Khogt1-VKCVF1/edit?usp=sharing&ouid=108900028355740409752&rtpof=true&sd=true";

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.a 
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center">
              <span 
                className="text-black font-bold text-[14px] tracking-tight" 
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                CY
              </span>
            </div>
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
        </div>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all shadow-lg h-auto"
          >
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">
              View My CV
            </a>
          </Button>

          {/* Mobile Navigation Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden rounded-full w-10 h-10 border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/20 transition-colors"
                aria-label="Toggle Menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0c0a0f] border-white/10 w-[85%] max-w-sm p-0 flex flex-col shadow-2xl">
              <SheetHeader className="p-6 border-b border-white/5 flex flex-row items-center justify-between">
                <SheetTitle className="text-left text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Menu
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a 
                      href={item.href}
                      className="text-3xl font-bold tracking-tight text-white hover:text-primary transition-colors py-4 border-b border-white/[0.03] flex items-center justify-between group"
                    >
                      {item.name}
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-primary text-xl"
                      >
                        →
                      </motion.span>
                    </a>
                  </SheetClose>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 bg-white/[0.02] mt-auto">
                <SheetClose asChild>
                  <Button className="w-full h-16 rounded-2xl bg-white text-black text-lg font-bold shadow-xl hover:bg-white/90" asChild>
                    <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                      View My CV
                    </a>
                  </Button>
                </SheetClose>
                <div className="mt-6 flex flex-col items-center gap-4 opacity-40">
                   <div className="flex gap-6">
                    <a href="https://x.com/calebyinusaa" target="_blank" className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Twitter</a>
                    <a href="https://github.com/bigdevsircole" target="_blank" className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">GitHub</a>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest italic">© 2025 Caleb Yinusa</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
