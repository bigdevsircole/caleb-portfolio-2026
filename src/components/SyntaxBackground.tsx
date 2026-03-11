"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

export default function SyntaxBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Noise/Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/[0.03] blur-[100px] rounded-full" />

      {/* Animated Code Snippets - Only rendered on client to avoid hydration mismatch with Math.random() */}
      {mounted && (
        <div className="absolute inset-0 flex flex-wrap content-start gap-12 p-20 opacity-[0.07]">
          {codeSnippets.map((code, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50 
              }}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
              className="text-xs font-code whitespace-nowrap select-none"
            >
              {code}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
