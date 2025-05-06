import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { ProductDetail } from "@/widgets/product-detail"
import { RelatedProducts } from "@/widgets/related-products"
import { PageTransition } from "@/shared/ui/page-transition"
import type { Metadata } from "next"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  // Примечание: в реальном проекте здесь должна быть логика получения данных продукта
  return {
    title: `${params.slug} | Вкус Хлеба`,
    description: "Детальная информация о нашем хлебе и выпечке",
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <PageTransition>
      <Header />
      <main>
        <ProductDetail slug={params.slug} />
        <RelatedProducts currentSlug={params.slug} />
      </main>
      <Footer />
    </PageTransition>
  )
}
