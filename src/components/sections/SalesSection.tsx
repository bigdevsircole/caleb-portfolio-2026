"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  {
    id: "p1",
    name: "Exclusive Training",
    category: "Training",
    price: "Make enquiry",
    image: PlaceHolderImages[3].imageUrl,
    link: "https://wa.me/2348180402086"
  },
  {
    id: "p2",
    name: "Join my Telegram Group",
    category: "Community",
    price: "Get Access",
    image: PlaceHolderImages[4].imageUrl,
    link: "https://paystack.shop/pay/learnwithcaleb"
  }
];

export function SalesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0.6, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="group p-6 bg-white/[0.03] rounded-3xl border border-white/10 card-hover flex flex-col gap-6"
        >
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/20">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{product.category}</span>
              <h3 className="text-2xl font-bold mt-1 text-white">{product.name}</h3>
              <p className="text-2xl font-light mt-2 text-white/80">{product.price}</p>
            </div>
            <a 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
