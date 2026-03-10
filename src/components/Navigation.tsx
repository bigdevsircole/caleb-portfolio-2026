"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Shop", href: "#shop" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all shadow-lg"
          >
            Work With Me
          </motion.button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 border border-white/10 bg-white/5 hover:bg-white/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 backdrop-blur-2xl border-white/10 w-[80%] max-w-sm pb-12 pt-16">
              <SheetHeader className="mb-8 sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a 
                      href={item.href}
                      className="text-3xl font-bold tracking-tight hover:text-muted-foreground transition-colors py-2"
                    >
                      {item.name}
                    </a>
                  </SheetClose>
                ))}
                <div className="h-px w-full bg-white/10 my-4" />
                <SheetClose asChild>
                  <Button className="w-full h-16 rounded-2xl bg-white text-black text-xl font-bold shadow-xl shadow-white/5">
                    Work With Me
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}