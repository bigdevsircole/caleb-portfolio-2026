import Navigation from "@/components/Navigation";
import SectionHeading from "@/components/SectionHeading";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SalesSection } from "@/components/sections/SalesSection";
import { ResourceSection } from "@/components/sections/ResourceSection";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import TypingAnimation from "@/components/TypingAnimation";
import SyntaxBackground from "@/components/SyntaxBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-white selection:text-black">
      <Navigation />
      
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="relative px-6 py-20 max-w-7xl mx-auto overflow-hidden">
          <SyntaxBackground />
          <div className="relative z-10 flex flex-col items-start gap-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </div>
            
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                CALEB YINUSA
              </h1>
              <span className="text-sm md:text-lg text-muted-foreground italic font-light tracking-[0.3em] uppercase opacity-60">
                DIGITAL SOLUTION ARCHITECT
              </span>
            </div>
            
            <div className="text-lg md:text-xl text-muted-foreground font-medium flex items-center gap-2">
              <TypingAnimation />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 text-base font-bold">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 px-8 h-14 text-base font-bold">
                Get in touch
              </Button>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading 
            title="Projects" 
            subtitle="A collection of digital experiences crafted with precision." 
          />
          <ProjectSection />
        </section>

        {/* Services / Tools */}
        <section id="shop" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Shop" 
              subtitle="Premium assets and educational resources for developers." 
            />
            <SalesSection />
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading 
            title="Resources" 
            subtitle="Free tools and snippets to accelerate your workflow." 
          />
          <ResourceSection />
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="p-12 md:p-24 bg-white/5 rounded-[2.5rem] border border-white/10 text-center flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
              Let's create something extraordinary together.
            </h2>
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-16 px-12 text-lg gap-3">
              <Mail className="w-5 h-5" /> Start a conversation
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Caleb Yinusa.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p>Made in Nigeria.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
