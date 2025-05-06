"use client"

import { RevealAnimation } from "@/shared/ui/reveal-animation"
import { RevealText } from "@/shared/ui/reveal-text"
import { Wheat, Leaf, ThumbsUp, Heart } from "lucide-react"

export function OurValues() {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealText>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Наши ценности</h2>
          </RevealText>
          <RevealAnimation delay={0.2}>
            <p className="text-muted-foreground">
              Мы верим, что настоящий хлеб должен быть не только вкусным, но и полезным. В основе нашей работы лежат
              принципы, которые позволяют нам создавать продукт высочайшего качества.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <RevealAnimation>
            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Wheat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Натуральность</h3>
              <p className="text-muted-foreground">
                Мы используем только натуральные ингредиенты, без искусственных добавок, улучшителей вкуса и
                консервантов.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество</h3>
              <p className="text-muted-foreground">
                Мы тщательно отбираем поставщиков и следим за качеством каждого ингредиента, чтобы наш хлеб был
                безупречным.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Экологичность</h3>
              <p className="text-muted-foreground">
                Мы заботимся об окружающей среде, используя экологичную упаковку и минимизируя отходы производства.
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Забота</h3>
              <p className="text-muted-foreground">
                Мы вкладываем душу в каждую буханку хлеба и заботимся о здоровье и удовлетворении наших клиентов.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
