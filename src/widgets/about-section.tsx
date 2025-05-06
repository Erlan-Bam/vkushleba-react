"use client";

import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealAnimation>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800&query=baker making artisan bread in bakery"
                  alt="О нашей пекарне"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </RevealAnimation>

          <div className="space-y-6">
            <RevealText>
              <h2 className="text-3xl md:text-4xl font-bold">
                О нашей пекарне
              </h2>
            </RevealText>

            <RevealAnimation delay={0.2}>
              <p className="text-muted-foreground">
                Мы — семейная пекарня, которая уже более 10 лет радует своих
                клиентов вкусным и полезным хлебом, приготовленным по
                традиционным рецептам.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-muted-foreground">
                Наша миссия — возродить культуру потребления настоящего хлеба,
                приготовленного без искусственных добавок и улучшителей вкуса.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Используем только натуральные ингредиенты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Готовим на собственной закваске без добавления дрожжей
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Соблюдаем традиционную технологию длительного брожения
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Выпекаем хлеб каждый день свежим</span>
                </li>
              </ul>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <Button asChild className="mt-4">
                <Link to="/about">Узнать больше</Link>
              </Button>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
