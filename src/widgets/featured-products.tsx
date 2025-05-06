"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { products as allProducts } from "@/shared/content/product";

export function FeaturedProducts() {
  const products = allProducts.slice(0, 4);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealText>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Наши продукты
            </h2>
          </RevealText>
          <RevealAnimation delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы используем только натуральные ингредиенты и традиционные методы
              приготовления, чтобы создать для вас самый вкусный и полезный
              хлеб.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <RevealAnimation key={product.id} delay={0.1 * index}>
              <Card
                className="overflow-hidden transition-all duration-300 h-full flex flex-col"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-square overflow-hidden">
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
                </div>
                <CardHeader className="pb-2 pt-4 sm:pt-6">
                  <CardTitle className="text-lg sm:text-xl">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow py-2">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-2 pb-4 sm:pb-6">
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

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/products" className="flex items-center gap-2">
              Все продукты
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
