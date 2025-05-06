"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Анна К.",
    text: "Лучший хлеб, который я когда-либо пробовала! Теперь заказываю только здесь. Особенно нравится хлеб на закваске — вкусный, ароматный и долго не черствеет.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&query=woman portrait",
  },
  {
    id: 2,
    name: "Максим Д.",
    text: "Очень вкусная выпечка и отличное обслуживание. Всегда свежие продукты и широкий ассортимент. Рекомендую всем, кто ценит качество и натуральность.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&query=man portrait",
  },
  {
    id: 3,
    name: "Елена В.",
    text: "Наконец-то нашла пекарню, где пекут настоящий хлеб без добавок. У меня аллергия на многие консерванты, а здесь я могу не беспокоиться о составе.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&query=woman portrait",
  },
  {
    id: 4,
    name: "Дмитрий С.",
    text: "Заказываю хлеб с доставкой каждую неделю. Всегда вовремя, всегда свежий. Багеты просто восхитительные, как в Париже!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100&query=man portrait",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Что говорят наши клиенты
            </h2>
          </RevealText>
          <RevealAnimation delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы ценим каждого клиента и стремимся сделать наш хлеб еще лучше,
              основываясь на ваших отзывах.
            </p>
          </RevealAnimation>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg bg-muted/30">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="shrink-0">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-background">
                        <img
                          src={
                            testimonials[current].image || "/placeholder.svg"
                          }
                          alt={testimonials[current].name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <div className="flex justify-center md:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonials[current].rating
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-lg italic">
                        {testimonials[current].text}
                      </p>
                      <p className="font-bold">{testimonials[current].name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
