"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <RevealText>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
          </RevealText>
          <RevealAnimation delay={0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              У вас есть вопросы или предложения? Напишите нам, и мы свяжемся с
              вами в ближайшее время.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <RevealAnimation>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Телефон</h3>
                  <p className="text-muted-foreground">+7 (747) 597-55-98</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-muted-foreground">web@vkushleba.kz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Часы работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <form className="space-y-4 bg-background p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Имя
                  </label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Ваш email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Тема
                </label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea id="message" placeholder="Ваше сообщение" rows={5} />
              </div>

              <Button type="submit" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
