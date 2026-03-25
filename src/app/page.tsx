import Navigation from "@/components/Navigation";
import SectionHeading from "@/components/SectionHeading";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SalesSection } from "@/components/sections/SalesSection";
import { ResourceSection } from "@/components/sections/ResourceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Button } from "@/components/ui/button";
import SyntaxBackground from "@/components/SyntaxBackground";
import * as motion from "framer-motion/client";
import { ContactForm } from "@/components/ContactForm";
import TypingAnimation from "@/components/TypingAnimation";

const easeSmooth = [0.22, 1, 0.36, 1];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="home" className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
          <SyntaxBackground />
          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: [0, -4, 0],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary backdrop-blur-sm"
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" 
              />
              Available for new opportunities
            </motion.div>
            
            <div className="flex flex-col gap-4">
              {/* Name Reveal with Neon Effect */}
              <motion.h1 
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: easeSmooth, delay: 0.3 }}
                className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] neon-text"
              >
                CALEB YINUSA
              </motion.h1>

              {/* Cycling Typing Animation */}
              <div className="h-6 flex items-center justify-center">
                <TypingAnimation />
              </div>

              {/* Subtitle Tracking Animation */}
              <motion.span 
                initial={{ opacity: 0, letterSpacing: "0.8em" }}
                animate={{ opacity: 0.6, letterSpacing: "0.4em" }}
                transition={{ duration: 1.2, ease: easeSmooth, delay: 0.6 }}
                className="text-[10px] md:text-xs text-muted-foreground italic font-light uppercase opacity-60 block mt-2"
              >
                DIGITAL SOLUTION ARCHITECT
              </motion.span>
            </div>

            {/* Buttons with Micro-interactions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: easeSmooth }}
              className="flex flex-wrap justify-center gap-4 mt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 h-14 text-base font-bold shadow-xl shadow-primary/20" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 px-8 h-14 text-base font-bold transition-all" asChild>
                  <a href="#contact">
                    Get in touch
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading 
            title="About" 
            subtitle="Architecting the digital future." 
          />
          <AboutSection />
        </section>

        {/* Selected Projects */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading 
            title="Projects" 
            subtitle="Some selected projects" 
          />
          <ProjectSection />
        </section>

        {/* Services / Tools */}
        <section id="shop" className="py-24 px-6 bg-primary/[0.02] border-y border-primary/10">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Shop" 
              subtitle="Premium assets and educational resources." 
            />
            <SalesSection />
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading 
            title="Resources" 
            subtitle="Free tools to accelerate your workflow." 
          />
          <ResourceSection />
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Caleb Yinusa.</p>
            <div className="flex gap-8">
              <a 
                href="https://x.com/calebyinusaa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://github.com/bigdevsircole" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/caleb-yinusa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <p>Made in Nigeria.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}