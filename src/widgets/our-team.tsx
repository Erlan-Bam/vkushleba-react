"use client";

import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { RevealText } from "@/shared/ui/reveal-text";
import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Ольга Петрова",
    position: "Основатель и главный пекарь",
    bio: "Влюблена в хлеб и выпечку уже более 15 лет. Прошла обучение у лучших пекарей Франции и Италии.",
    image: "/placeholder.svg?height=400&width=400&query=woman baker portrait",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Алексей Смирнов",
    position: "Шеф-пекарь",
    bio: "Профессиональный пекарь с опытом работы более 10 лет. Специализируется на ржаных хлебах и багетах.",
    image: "/placeholder.svg?height=400&width=400&query=man baker portrait",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Мария Иванова",
    position: "Кондитер",
    bio: "Отвечает за сладкую часть нашего ассортимента. Создает невероятные десерты и выпечку.",
    image:
      "/placeholder.svg?height=400&width=400&query=woman pastry chef portrait",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Дмитрий Козлов",
    position: "Менеджер",
    bio: "Управляет всеми процессами в пекарне, следит за качеством обслуживания и работой команды.",
    image: "/placeholder.svg?height=400&width=400&query=man manager portrait",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },
];

export function OurTeam() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealText>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Наша команда
            </h2>
          </RevealText>
          <RevealAnimation delay={0.2}>
            <p className="text-muted-foreground">
              Мы - команда увлеченных профессионалов, объединенных общей идеей -
              делать лучший хлеб для вас.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <RevealAnimation key={member.name} delay={index * 0.1}>
              <div className="bg-background rounded-lg overflow-hidden shadow-sm group">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.instagram} aria-label="Instagram">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={member.social.facebook} aria-label="Facebook">
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
