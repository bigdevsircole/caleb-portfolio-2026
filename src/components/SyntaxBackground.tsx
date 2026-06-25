"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const codeSnippets = [
  "const architect = new DigitalArchitect();",
  "architect.build({ vision: 'Limitless' });",
  "import { motion } from 'framer-motion';",
  "export default function Portfolio() {",
  "await dream.execute();",
  "while (learning) { grow(); }",
  "type Innovation = Code & Design;",
  "const experience = user.experience.map(ux => ux.perfect);",
  "git commit -m 'Release extraordinary';",
  "npm install future-ready",
  "const pixel = forge.create({ color: '#FFF' });",
  "interface Excellence { quality: 'Highest' }",
];

interface SnippetConfig {
  x: number;
  y: number;
  duration: number;
  delay: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function SyntaxBackground() {
  const [mounted, setMounted] = useState(false);
  const [configs, setConfigs] = useState<SnippetConfig[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Mouse coordinates ref for the animation loop
  const mouseRef = useRef({ x: 0, y: 0, active: false, lastMove: 0 });

  useEffect(() => {
    // Generate snippet configs
    const generatedConfigs = codeSnippets.map(() => ({
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 2,
    }));
    setConfigs(generatedConfigs);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const colors = [
      "rgba(99, 102, 241, 0.25)",  // Indigo
      "rgba(168, 85, 247, 0.25)", // Purple
      "rgba(236, 72, 153, 0.2)",  // Pink
      "rgba(6, 182, 212, 0.25)",  // Cyan
    ];

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize particles based on screen width
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 35 : 85;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse position globally
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
      mouseRef.current.lastMove = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      // Fade out mouse interaction if there's been no movement for 3 seconds
      if (mouse.active && Date.now() - mouse.lastMove > 3000) {
        mouse.active = false;
      }

      const connectionDist = 120;
      const mouseDist = 185;

      // Update & Draw Particles
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (gentle attraction)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseDist) {
            // Apply subtle force towards mouse
            const force = (mouseDist - dist) / mouseDist;
            p.x += (dx / dist) * force * 0.3;
            p.y += (dy / dist) * force * 0.3;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Lines to mouse
        if (mouse.active) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseDist) {
            const alpha = (1 - dist / mouseDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // Violet connection
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Lines to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.06;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background" aria-hidden="true" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Ambient shifting cosmic blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Violet Shifting Blob */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-5%] left-[15%] w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[120px]"
        />
        
        {/* Fuchsia Shifting Blob */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -60, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[5%] w-[550px] h-[550px] rounded-full bg-fuchsia-600/6 blur-[150px]"
        />
        
        {/* Cyan Shifting Blob */}
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 50, 20, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-[35%] left-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[110px]"
        />
      </div>

      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-75"
      />

      {/* Falling Code Snippets Layer (subtle drift) */}
      <div className="absolute inset-0 flex flex-wrap content-start gap-12 p-20 opacity-[0.025]">
        {codeSnippets.map((code, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.2, 
              x: configs[i]?.x || 0,
              y: configs[i]?.y || 0 
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              x: [configs[i]?.x || 0, (configs[i]?.x || 0) + 15, configs[i]?.x || 0],
              y: [configs[i]?.y || 0, (configs[i]?.y || 0) + 5, configs[i]?.y || 0]
            }}
            transition={{
              duration: configs[i]?.duration || 20,
              repeat: Infinity,
              ease: "linear",
              delay: configs[i]?.delay || 0
            }}
            className="text-[10px] md:text-xs font-code whitespace-nowrap select-none text-white/30"
          >
            {code}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
