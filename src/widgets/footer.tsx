import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RevealAnimation } from "@/shared/ui/reveal-animation";

export function Footer() {
  return (
    <footer className="bg-muted py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <RevealAnimation>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Вкус Хлеба</h3>
              <p className="text-muted-foreground">
                Натуральный хлеб и выпечка на закваске, приготовленные с любовью
                и заботой о вашем здоровье.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Продукты
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    ул. Хлебная 123, Алматы, Казахстан
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    +7 (747) 597-55-98
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    web@vkushleba.kz
                  </span>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Подписка</h3>
              <p className="text-muted-foreground">
                Подпишитесь на нашу рассылку, чтобы получать новости и
                специальные предложения.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder="Ваш email" className="bg-background" />
                <Button className="mt-2 sm:mt-0">Отправить</Button>
              </div>
            </div>
          </RevealAnimation>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Вкус Хлеба. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
