import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { ProductsHero } from "@/widgets/products-hero"
import { ProductCategories } from "@/widgets/product-categories"
import { ProductGrid } from "@/widgets/product-grid"
import { PageTransition } from "@/shared/ui/page-transition"

export const metadata = {
  title: "Продукты | Вкус Хлеба",
  description: "Наш ассортимент свежего хлеба и выпечки",
}

export default function ProductsPage() {
  return (
    <PageTransition>
      <Header />
      <main>
        <ProductsHero />
        <ProductCategories />
        <ProductGrid />
      </main>
      <Footer />
    </PageTransition>
  )
}
