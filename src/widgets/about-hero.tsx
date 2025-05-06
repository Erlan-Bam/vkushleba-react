"use client";

import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
export function AboutHero() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
      <div className="bread-pattern absolute inset-0 z-0" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <RevealText>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              О нас
            </h1>
          </RevealText>

          <RevealAnimation delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10">
              Мы создаем вкусный домашний хлеб, сохраняя традиции и используя
              только лучшие ингредиенты.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <img
                src="/bustling-bakery-morning.png"
                alt="Наша пекарня"
                className="object-cover"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
