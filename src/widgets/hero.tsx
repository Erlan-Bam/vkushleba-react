"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { OrderPopup } from "@/widgets/order-popup";
import { Link } from "react-router-dom";

export function Hero() {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-16 sm:pt-20">
      <div className="bread-pattern absolute inset-0 z-0" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        <div className="space-y-6">
          <RevealAnimation>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Настоящий вкус домашнего хлеба
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Мы печем хлеб и выпечку по традиционным рецептам, используя только
              натуральные ингредиенты и закваску собственного приготовления.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/products">Наши продукты</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setOrderPopupOpen(true)}
              >
                Заказать
              </Button>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  15+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Видов хлеба
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Натуральные ингредиенты
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  24ч
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Доставка
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <img
              src="/rustic-sourdough.png"
              alt="Свежий хлеб"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-6 sm:-bottom-10 -left-4 sm:-left-10 z-20 bg-background p-4 sm:p-6 rounded-xl shadow-lg max-w-[200px] sm:max-w-xs"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  <path d="M12 12 2.1 12.5" />
                  <path d="M16.5 7.5a5 5 0 0 1 0 7.1" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Натуральная закваска</h3>
                <p className="text-sm text-muted-foreground">
                  Наш хлеб готовится на натуральной закваске без добавления
                  дрожжей
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <OrderPopup open={orderPopupOpen} onOpenChange={setOrderPopupOpen} />
    </section>
  );
}
