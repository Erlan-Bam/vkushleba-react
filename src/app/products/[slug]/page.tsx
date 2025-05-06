// ProductPage.tsx
import { useParams } from "react-router-dom";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { ProductDetail } from "@/widgets/product-detail";
import { RelatedProducts } from "@/widgets/related-products";
import { PageTransition } from "@/shared/ui/page-transition";

function ProductPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <div>Product not found</div>;
  }

  return (
    <PageTransition>
      <Header />
      <main>
        <ProductDetail slug={slug} />
        <RelatedProducts currentSlug={slug} />
      </main>
      <Footer />
    </PageTransition>
  );
}

export default ProductPage;
