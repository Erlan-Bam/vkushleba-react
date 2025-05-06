import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Hero } from "@/widgets/hero";
import { FeaturedProducts } from "@/widgets/featured-products";
import { AboutSection } from "@/widgets/about-section";
import { TestimonialsSection } from "@/widgets/testimonials-section";
import { ContactSection } from "@/widgets/contact-section";
import { PageTransition } from "@/shared/ui/page-transition";
import "./globals.css";
export default function HomePage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
