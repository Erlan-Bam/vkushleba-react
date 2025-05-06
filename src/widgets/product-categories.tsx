"use client";

import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProductContext } from "@/components/product-provider";

const categories = [
  { id: "all", name: "Все продукты" },
  { id: "bread", name: "Хлеб" },
  { id: "black-bread", name: "Черный хлеб" },
  { id: "bakery", name: "Выпечка" },
];

export function ProductCategories() {
  const { activeCategory, setActiveCategory } = useProductContext();

  return (
    <section className="py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "transition-all text-xs sm:text-sm",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:text-primary"
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
