"use client";

import { useState } from "react";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Данные продуктов
const allProducts = [
  {
    id: 1,
    name: "Хлеб на закваске классический",
    price: 800,
    slug: "sourdough-classic",
    image: "/rustic-sourdough.png",
  },
  {
    id: 4,
    name: "Багет французский",
    price: 600,
    slug: "french-baguette",
    image: "/golden-crusted-baguette.png",
  },
  {
    id: 7,
    name: "Ржаной хлеб классический",
    price: 750,
    slug: "rye-classic",
    image: "/rustic-rye-loaf.png",
  },
  {
    id: 13,
    name: "Чиабатта",
    price: 700,
    slug: "ciabatta",
    image: "/golden-ciabatta-loaf.png",
  },
];

interface RelatedProductsProps {
  currentSlug: string;
}

export function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Фильтруем текущий продукт из списка связанных
  const relatedProducts = allProducts
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="py-12 pb-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealText>
            <h2 className="text-2xl sm:text-3xl font-bold">Похожие продукты</h2>
          </RevealText>
          <RevealAnimation delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Вам также может понравиться другая наша продукция, приготовленная
              с тем же вниманием и заботой.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {relatedProducts.map((product, index) => (
            <RevealAnimation key={product.id} delay={0.1 * index}>
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
                <CardFooter className="flex justify-between items-center pt-0 pb-4 sm:pb-6">
                  <p className="font-bold text-base sm:text-lg">
                    {product.price} ₸
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={`/products/${product.slug}`}>Подробнее</Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
