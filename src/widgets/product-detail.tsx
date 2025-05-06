"use client"

import { useState } from "react"
import { RevealAnimation } from "@/shared/ui/reveal-animation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ProductGallery } from "@/widgets/product-gallery"
import { OrderPopup } from "@/widgets/order-popup"
import { Check, Wheat, Info, Leaf } from "lucide-react"

// Это данные продуктов, в реальном приложении они бы загружались из API или базы данных
const products = {
  "sourdough-classic": {
    id: 1,
    name: "Хлеб на закваске классический",
    description:
      "Классический хлеб на натуральной закваске с хрустящей корочкой и мягким ароматным мякишем. Приготовлен по традиционной технологии с длительным брожением, что придает хлебу неповторимый вкус и аромат.",
    price: 800,
    weight: "500 г",
    badges: ["Популярное", "Бестселлер"],
    category: "sourdough",
    ingredients: "Мука пшеничная высшего сорта, вода, закваска (мука ржаная, вода), соль морская.",
    nutritionFacts: {
      calories: "240 ккал",
      proteins: "8.5 г",
      fats: "1.2 г",
      carbs: "49 г",
      fiber: "2.6 г",
    },
    storageInfo:
      "Хранить при комнатной температуре до 3 дней. Для длительного хранения заморозить в плотно закрытом пакете.",
    features: [
      "Натуральная закваска без добавления дрожжей",
      "Длительное брожение (более 12 часов)",
      "Без консервантов и улучшителей",
      "Ручная формовка каждой буханки",
    ],
    images: [
      "/rustic-sourdough.png",
      "/placeholder.svg?height=600&width=600&query=sourdough bread sliced",
      "/placeholder.svg?height=600&width=600&query=sourdough bread with butter",
      "/placeholder.svg?height=600&width=600&query=sourdough bread closeup crust",
    ],
  },
  ciabatta: {
    id: 13,
    name: "Чиабатта",
    description:
      "Итальянский хлеб с хрустящей корочкой и крупными порами внутри. Идеально подходит для сэндвичей и брускетты. Чиабатта обладает легким ореховым ароматом и упругим мякишем с крупными порами.",
    price: 700,
    weight: "300 г",
    badges: ["Итальянская кухня"],
    category: "specialty",
    ingredients: "Мука пшеничная высшего сорта, вода, оливковое масло, закваска (мука пшеничная, вода), соль морская.",
    nutritionFacts: {
      calories: "260 ккал",
      proteins: "9 г",
      fats: "3.5 г",
      carbs: "48 г",
      fiber: "2.2 г",
    },
    storageInfo: "Хранить при комнатной температуре до 2 дней в бумажном пакете. Для дольного хранения заморозить.",
    features: [
      "Традиционный итальянский рецепт",
      "Высокое содержание влаги в тесте",
      "Без консервантов и улучшителей",
      "Идеально для сэндвичей и брускетты",
    ],
    images: [
      "/golden-ciabatta-loaf.png",
      "/placeholder.svg?height=600&width=600&query=ciabatta sliced",
      "/placeholder.svg?height=600&width=600&query=ciabatta sandwich",
      "/placeholder.svg?height=600&width=600&query=ciabatta crumb structure",
    ],
  },
  "french-baguette": {
    id: 4,
    name: "Багет французский",
    description:
      "Традиционный французский багет с хрустящей корочкой и воздушным мякишем. Приготовлен по классическому французскому рецепту. Идеально подходит для сэндвичей, тостов или как дополнение к сырной тарелке.",
    price: 600,
    weight: "250 г",
    badges: ["Французская кухня"],
    category: "baguettes",
    ingredients: "Мука пшеничная высшего сорта, вода, закваска (мука пшеничная, вода), соль морская.",
    nutritionFacts: {
      calories: "220 ккал",
      proteins: "7.5 г",
      fats: "1 г",
      carbs: "46 г",
      fiber: "1.8 г",
    },
    storageInfo:
      "Хранить при комнатной температуре до 2 дней. Для сохранения хрустящей корочки не рекомендуется хранить в полиэтиленовом пакете.",
    features: [
      "Традиционный французский рецепт",
      "Хрустящая корочка и воздушный мякиш",
      "Без консервантов и улучшителей",
      "Выпекается в каменной печи",
    ],
    images: [
      "/golden-crusted-baguette.png",
      "/placeholder.svg?height=600&width=600&query=french baguette sliced",
      "/placeholder.svg?height=600&width=600&query=french baguette with cheese",
      "/placeholder.svg?height=600&width=600&query=french baguette wrapped in paper",
    ],
  },
  "rye-classic": {
    id: 7,
    name: "Ржаной хлеб классический",
    description:
      "Традиционный ржаной хлеб с насыщенным вкусом и ароматом. Содержит большое количество клетчатки и полезных веществ. Обладает характерным кисловатым вкусом и плотной текстурой.",
    price: 750,
    weight: "500 г",
    badges: ["Полезное питание"],
    category: "rye",
    ingredients:
      "Мука ржаная обдирная, мука пшеничная 1 сорт, вода, закваска ржаная, соль морская, солод ржаной, тмин.",
    nutritionFacts: {
      calories: "210 ккал",
      proteins: "6.5 г",
      fats: "1 г",
      carbs: "42 г",
      fiber: "5.2 г",
    },
    storageInfo:
      "Хранить при комнатной температуре до 5 дней. Ржаной хлеб дольше сохраняет свежесть по сравнению с пшеничным.",
    features: [
      "Высокое содержание клетчатки",
      "Насыщенный вкус и аромат",
      "Длительное сохранение свежести",
      "Полезен для пищеварения",
    ],
    images: [
      "/rustic-rye-loaf.png",
      "/placeholder.svg?height=600&width=600&query=rye bread sliced",
      "/placeholder.svg?height=600&width=600&query=rye bread with butter",
      "/placeholder.svg?height=600&width=600&query=rye bread texture closeup",
    ],
  },
}

interface ProductDetailProps {
  slug: string
}

export function ProductDetail({ slug }: ProductDetailProps) {
  const [orderPopupOpen, setOrderPopupOpen] = useState(false)

  // Получаем данные продукта по slug
  const product = products[slug as keyof typeof products] || products["sourdough-classic"]

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <RevealAnimation>
            <ProductGallery images={product.images} />
          </RevealAnimation>

          <div className="space-y-8">
            <RevealAnimation delay={0.2}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <Badge key={badge} className="bg-primary">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{product.name}</h1>

                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-xl sm:text-2xl font-bold">{product.price} ₸</span>
                  <span className="text-sm sm:text-base text-muted-foreground">/ {product.weight}</span>
                </div>

                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className="space-y-4">
                <Button size="lg" className="w-full" onClick={() => setOrderPopupOpen(true)}>
                  Заказать
                </Button>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <Card className="overflow-hidden">
                <Tabs defaultValue="description">
                  <TabsList className="w-full grid grid-cols-3 text-xs sm:text-sm">
                    <TabsTrigger value="description">Описание</TabsTrigger>
                    <TabsTrigger value="ingredients">Состав</TabsTrigger>
                    <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="p-4 sm:p-6 space-y-4">
                    <h3 className="font-bold flex items-center gap-2">
                      <Info className="h-5 w-5 text-primary" />
                      Особенности
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-bold flex items-center gap-2 pt-2">
                      <Info className="h-5 w-5 text-primary" />
                      Хранение
                    </h3>
                    <p>{product.storageInfo}</p>
                  </TabsContent>

                  <TabsContent value="ingredients" className="p-6 space-y-4">
                    <h3 className="font-bold flex items-center gap-2">
                      <Wheat className="h-5 w-5 text-primary" />
                      Ингредиенты
                    </h3>
                    <p>{product.ingredients}</p>

                    <div className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg mt-4">
                      <Leaf className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Натуральный состав</h4>
                        <p className="text-sm text-muted-foreground">
                          Мы используем только натуральные ингредиенты без консервантов, искусственных добавок и
                          улучшителей вкуса.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="nutrition" className="p-6">
                    <h3 className="font-bold flex items-center gap-2 mb-4">
                      <Info className="h-5 w-5 text-primary" />
                      Пищевая ценность на 100г
                    </h3>

                    <div className="space-y-2">
                      <div className="flex justify-between py-2 border-b">
                        <span>Калории</span>
                        <span className="font-medium">{product.nutritionFacts.calories}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span>Белки</span>
                        <span className="font-medium">{product.nutritionFacts.proteins}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span>Жиры</span>
                        <span className="font-medium">{product.nutritionFacts.fats}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span>Углеводы</span>
                        <span className="font-medium">{product.nutritionFacts.carbs}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Клетчатка</span>
                        <span className="font-medium">{product.nutritionFacts.fiber}</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Способы доставки</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">Мы предлагаем несколько вариантов доставки:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Стандартная доставка (в течение дня) - 1000 ₸</li>
                      <li>• Экспресс-доставка (в течение 2 часов) - 1500 ₸</li>
                      <li>• Самовывоз из пекарни - бесплатно</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Способы оплаты</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">Доступные способы оплаты:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Наличными при получении</li>
                      <li>• Банковской картой при получении</li>
                      <li>• Банковской картой онлайн</li>
                      <li>• Kaspi QR</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Возврат и обмен</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Если вы обнаружили какие-либо проблемы с качеством продукции, пожалуйста, свяжитесь с нами в
                      течение 24 часов после получения заказа. Мы заменим товар или вернем деньги.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </RevealAnimation>
          </div>
        </div>
      </div>
      <OrderPopup open={orderPopupOpen} onOpenChange={setOrderPopupOpen} />
    </section>
  )
}
