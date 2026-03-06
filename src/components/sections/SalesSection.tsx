
"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "p1",
    name: "Full-Stack Mastery",
    category: "Course",
    price: "$199",
    rating: 5,
    image: PlaceHolderImages[3].imageUrl
  },
  {
    id: "p2",
    name: "Ultimate UI Kit",
    category: "Design Tool",
    price: "$49",
    rating: 4.8,
    image: PlaceHolderImages[4].imageUrl
  }
];

export function SalesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-4 border border-border flex flex-col sm:flex-row gap-6 hover:border-accent/50 transition-all"
        >
          <div className="relative w-full sm:w-48 h-48 shrink-0 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint="product cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between py-2">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{product.category}</span>
              <h3 className="text-2xl font-bold mt-1 mb-2">{product.name}</h3>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} />
                ))}
                <span className="text-sm text-muted-foreground ml-2">{product.rating}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-3xl font-bold">{product.price}</span>
              <Button 
                className="bg-accent hover:bg-accent/90 rounded-full glow-on-hover px-6"
                onClick={() => alert("Checkout flow integration placeholder")}
              >
                <ShoppingCart className="mr-2 w-4 h-4" /> Buy Now
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
