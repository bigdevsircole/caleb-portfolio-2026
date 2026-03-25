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

interface SnippetConfig {
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export default function SyntaxBackground() {
  const [mounted, setMounted] = useState(false);
  const [configs, setConfigs] = useState<SnippetConfig[]>([]);

  useEffect(() => {
    const generatedConfigs = codeSnippets.map(() => ({
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 2,
    }));
    setConfigs(generatedConfigs);
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-black/5" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/[0.03] blur-[100px] rounded-full" />

      <div className="absolute inset-0 flex flex-wrap content-start gap-12 p-20 opacity-[0.05]">
        {codeSnippets.map((code, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: configs[i]?.x || 0,
              y: configs[i]?.y || 0 
            }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              x: [configs[i]?.x || 0, (configs[i]?.x || 0) + 15, configs[i]?.x || 0],
              y: [configs[i]?.y || 0, (configs[i]?.y || 0) + 5, configs[i]?.y || 0]
            }}
            transition={{
              duration: configs[i]?.duration || 15,
              repeat: Infinity,
              ease: "linear",
              delay: configs[i]?.delay || 0
            }}
            className="text-[10px] md:text-xs font-code whitespace-nowrap select-none"
          >
            {code}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
