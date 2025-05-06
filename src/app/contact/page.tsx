import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { ContactHero } from "@/widgets/contact-hero"
import { ContactForm } from "@/widgets/contact-form"
import { LocationMap } from "@/widgets/location-map"
import { PageTransition } from "@/shared/ui/page-transition"

export const metadata = {
  title: "Контакты | Вкус Хлеба",
  description: "Свяжитесь с нами для заказа или сотрудничества",
}

export default function ContactPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </PageTransition>
  )
}
