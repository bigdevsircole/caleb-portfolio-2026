
'use client';

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SectionHeading from "@/components/SectionHeading";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SalesSection } from "@/components/sections/SalesSection";
import { ResourceSection } from "@/components/sections/ResourceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Button } from "@/components/ui/button";
import SyntaxBackground from "@/components/SyntaxBackground";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  const [currentYear, setCurrentYear] = useState("2025");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0c0a0f] text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <Navigation />
      
      <SyntaxBackground />

      <main className="relative z-10 pt-20">
        {/* HERO SECTION */}
        <section id="home" className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
            Available for new projects
          </motion.div>
          
          <div className="flex flex-col gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] neon-text text-white"
            >
              CALEB YINUSA
            </motion.h1>

            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs md:text-sm text-muted-foreground italic font-light uppercase tracking-[0.5em] mt-4 block"
            >
              DIGITAL SOLUTION ARCHITECT
            </motion.span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-5 mt-6"
          >
            <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30" asChild>
              <a href="#projects">Explore Work</a>
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 px-10 h-16 text-lg font-bold transition-all text-white backdrop-blur-sm" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>
        </section>

        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading title="About" subtitle="Architecting the digital future." />
          <AboutSection />
        </section>

        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading title="Projects" subtitle="Selected digital solutions." />
          <ProjectSection />
        </section>

        <section id="shop" className="py-24 px-6 bg-primary/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Shop" subtitle="Premium tools and training." />
            <SalesSection />
          </div>
        </section>

        <section id="resources" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading title="Resources" subtitle="Free assets for your workflow." />
          <ResourceSection />
        </section>

        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
          <ContactForm />
        </section>

        <footer className="py-16 px-6 border-t border-white/5 mt-24 bg-black/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground text-sm font-medium">
            <p className="tracking-tight">&copy; {currentYear} Caleb Yinusa. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="https://x.com/calebyinusaa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-105">Twitter</a>
              <a href="https://github.com/bigdevsircole" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-105">GitHub</a>
              <a href="https://www.linkedin.com/in/caleb-yinusa/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-105">LinkedIn</a>
            </div>
            <p className="opacity-60">Engineered in Lagos, Nigeria.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
