
"use client";

import { motion } from "framer-motion";
import { Download, Lock, FileCode, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    id: "r1",
    title: "Tailwind Component Library",
    type: "Source Code",
    icon: FileCode,
    isLocked: true
  },
  {
    id: "r2",
    title: "Brand Identity Assets",
    type: "Figma File",
    icon: Palette,
    isLocked: false
  },
  {
    id: "r3",
    title: "Production CI/CD Script",
    type: "Shell Script",
    icon: Zap,
    isLocked: true
  }
];

export function ResourceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((res, index) => (
        <motion.div
          key={res.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-6 bg-card border border-border rounded-2xl relative group hover:border-primary transition-all overflow-hidden"
        >
          {res.isLocked && (
            <div className="absolute top-4 right-4 text-muted-foreground">
              <Lock className="w-4 h-4" />
            </div>
          )}
          
          <div className="mb-6 p-3 bg-primary/10 w-fit rounded-xl text-primary">
            <res.icon className="w-6 h-6" />
          </div>
          
          <h4 className="text-lg font-bold mb-1">{res.title}</h4>
          <p className="text-xs text-muted-foreground mb-6 uppercase tracking-widest">{res.type}</p>
          
          <Button 
            variant={res.isLocked ? "secondary" : "default"}
            className="w-full rounded-xl gap-2 font-semibold"
            disabled={res.isLocked}
          >
            {res.isLocked ? "Purchased Required" : <><Download className="w-4 h-4" /> Download</>}
          </Button>

          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
