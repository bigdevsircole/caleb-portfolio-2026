import Navigation from "@/components/Navigation";
import SyntaxBackground from "@/components/SyntaxBackground";
import TypingAnimation from "@/components/TypingAnimation";
import SectionHeading from "@/components/SectionHeading";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SalesSection } from "@/components/sections/SalesSection";
import { ResourceSection } from "@/components/sections/ResourceSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SyntaxBackground />
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              <span className="block text-foreground neon-text mb-2">CALEB</span>
              <span className="block text-primary neon-text">YINUSA</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-medium mb-12 h-8">
              <TypingAnimation />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8 bg-primary hover:bg-primary/90 rounded-full glow-on-hover">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 rounded-full border-primary/20 hover:bg-primary/10">
                Download CV
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
          <SectionHeading 
            title="Selected Projects" 
            subtitle="Explore my latest digital creations, ranging from complex web applications to minimalist designs." 
          />
          <ProjectSection />
        </section>

        {/* Sales Section */}
        <section id="shop" className="py-24 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Courses & Tools" 
              subtitle="Level up your development skills with my exclusive digital courses and productivity tools." 
            />
            <SalesSection />
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 px-4 max-w-7xl mx-auto">
          <SectionHeading 
            title="Resource Library" 
            subtitle="Access exclusive downloads, source code, and assets designed for professional developers." 
          />
          <ResourceSection />
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border mt-24 text-center">
          <div className="max-w-7xl mx-auto text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Caleb Yinusa. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Framer Motion, and Firebase.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
