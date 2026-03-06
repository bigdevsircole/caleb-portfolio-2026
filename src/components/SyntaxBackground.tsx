
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const syntaxElements = [
  "<div>", "const", "import", "export", "function", "=>", "{}", "[]", "return", "async", "await", "null", "undefined", "<Canvas />", "useEffect", "useState"
];

export default function SyntaxBackground() {
  const [elements, setElements] = useState<{ id: number; text: string; x: number; y: number; duration: number }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      text: syntaxElements[Math.floor(Math.random() * syntaxElements.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 10 + Math.random() * 20,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-primary font-code whitespace-nowrap text-sm"
          initial={{ x: `${el.x}%`, y: "110%" }}
          animate={{
            y: "-10%",
            x: [`${el.x}%`, `${el.x + (Math.random() * 10 - 5)}%`, `${el.x}%`],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: 0, top: 0 }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
}
