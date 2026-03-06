"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: "p1",
    name: "Full-Stack Mastery",
    category: "Course",
    price: "$199",
    image: PlaceHolderImages[3].imageUrl
  },
  {
    id: "p2",
    name: "Ultimate UI Kit",
    category: "Digital Asset",
    price: "$49",
    image: PlaceHolderImages[4].imageUrl
  }
];

export function SalesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group p-6 bg-white/[0.03] rounded-3xl border border-white/10 card-hover flex flex-col gap-6"
        >
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint="product cover minimal"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{product.category}</span>
              <h3 className="text-2xl font-bold mt-1">{product.name}</h3>
              <p className="text-2xl font-light mt-2">{product.price}</p>
            </div>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}