"use client";

import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";

export function ProductsHero() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
      <div className="bread-pattern absolute inset-0 z-0" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <RevealText>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Наши продукты
            </h1>
          </RevealText>

          <RevealAnimation delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10">
              Исследуйте наш ассортимент хлеба и выпечки, приготовленных с
              любовью из натуральных ингредиентов.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=1200&query=assortment of artisan breads on display"
                alt="Ассортимент хлеба"
                className="object-cover"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
