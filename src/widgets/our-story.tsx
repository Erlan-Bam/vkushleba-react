"use client";

import { motion } from "framer-motion";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";

export function OurStory() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <RevealText>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Наша история
            </h2>
          </RevealText>

          <div className="grid gap-8 sm:gap-12 mt-6 sm:mt-10">
            <RevealAnimation>
              <div className="grid md:grid-cols-5 gap-4 sm:gap-6 items-center">
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src="/mixing-bread-dough.png"
                      alt="Начало пути"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    2013 - Начало пути
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    История нашей пекарни началась в 2013 году, когда
                    основательница Ольга впервые приготовила хлеб на закваске
                    для своей семьи. Вскоре ее хлеб полюбили друзья и знакомые,
                    и она решила поделиться своим творением со всеми жителями
                    города.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-3 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-3">
                    2015 - Первая пекарня
                  </h3>
                  <p className="text-muted-foreground">
                    Через два года мы открыли свою первую небольшую пекарню в
                    центре города. Наш хлеб быстро завоевал популярность
                    благодаря натуральным ингредиентам и традиционным методам
                    приготовления. Мы начали экспериментировать с различными
                    видами муки и добавками.
                  </p>
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src="/cozy-corner-bakery.png"
                      alt="Первая пекарня"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src="/artisan-bread-display.png"
                      alt="Расширение ассортимента"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-3">
                    2018 - Расширение ассортимента
                  </h3>
                  <p className="text-muted-foreground">
                    С ростом популярности мы расширили ассортимент и начали
                    предлагать не только хлеб, но и различную выпечку:
                    круассаны, булочки, багеты и многое другое. Мы также
                    запустили службу доставки, чтобы наши клиенты могли
                    наслаждаться свежей выпечкой, не выходя из дома.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-3 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-3">
                    Сегодня - Вкус Хлеба
                  </h3>
                  <p className="text-muted-foreground">
                    Сегодня "Вкус Хлеба" - это не просто пекарня, а целая
                    философия правильного питания. Мы проводим мастер-классы по
                    выпечке хлеба, делимся рецептами и знаниями о пользе
                    натуральных продуктов. Наша миссия - возродить культуру
                    потребления настоящего хлеба и показать, что хлеб может быть
                    не только вкусным, но и полезным.
                  </p>
                </div>
                <div className="md:col-span-2 order-1 md:order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src="/artisan-bakery-workshop.png"
                      alt="Вкус Хлеба сегодня"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
