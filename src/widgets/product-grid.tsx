"use client";

import { useState } from "react";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { products } from "@/shared/content/product";
import { useProductContext } from "@/components/product-provider";

export function ProductGrid() {
  const { activeCategory } = useProductContext();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter products based on the active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-12 pb-24">
      <div className="container mx-auto px-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Нет продуктов в данной категории
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <RevealAnimation key={product.id} delay={0.05 * index}>
                <Card
                  className="overflow-hidden transition-all duration-300 h-full flex flex-col"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link
                    to={`/products/${product.slug}`}
                    className="block relative aspect-square overflow-hidden"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover transition-transform duration-500"
                      style={{
                        transform:
                          hoveredId === product.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        {product.badge}
                      </Badge>
                    )}
                  </Link>
                  <CardContent className="flex-grow pt-4 sm:pt-6">
                    <Link
                      to={`/products/${product.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                        {product.name}
                      </h3>
                    </Link>
                  </CardContent>
                  {/* <CardFooter className="flex justify-between items-center pt-0 pb-4 sm:pb-6">
                    <p className="font-bold text-base sm:text-lg">
                      {product.weight}
                    </p>
                  </CardFooter> */}
                </Card>
              </RevealAnimation>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
