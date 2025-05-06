import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { AboutHero } from "@/widgets/about-hero"
import { OurStory } from "@/widgets/our-story"
import { OurValues } from "@/widgets/our-values"
import { OurTeam } from "@/widgets/our-team"
import { PageTransition } from "@/shared/ui/page-transition"

export const metadata = {
  title: "О нас | Вкус Хлеба",
  description: "Узнайте больше о нашей пекарне и нашей истории",
}

export default function AboutPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <OurValues />
        <OurTeam />
      </main>
      <Footer />
    </PageTransition>
  )
}
