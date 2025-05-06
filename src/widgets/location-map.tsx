"use client";

import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-8 sm:py-12 pb-16 sm:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
          <RevealAnimation className="md:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Контактная информация</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground text-sm">
                        ул. Хлебная 123, Алматы, Казахстан
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Часы работы</p>
                      <p className="text-muted-foreground text-sm">
                        Пн-Пт: 8:00 - 20:00
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Сб-Вс: 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground text-sm">
                        +7 (747) 597-55-98
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">
                        web@vkushleba.kz
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealAnimation>

          <RevealAnimation className="md:col-span-2" delay={0.2}>
            <div className="aspect-[4/3] md:aspect-[16/9] w-full h-full rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.4890716372553!2d76.94149237678484!3d43.245192871984246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692f027581ad%3A0x2426740f56437e63!2z0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1688035429366!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения пекарни"
              ></iframe>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
