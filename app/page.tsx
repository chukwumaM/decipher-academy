import HeroSlider from '@/components/HeroSlider';
import CategoryPreview from '@/components/CategoryPreview';
import ProductCard from '@/components/ProductCard';

async function getData() {
  const [productsRes, slidesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/products?featured=true`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/slides`, { cache: 'no-store' })
  ]);

  const products = await productsRes.json();
  const slides = await slidesRes.json();
  return { products, slides };
}

export default async function HomePage() {
  const { products, slides } = await getData();

  return (
    <div className="container">
      <HeroSlider slides={slides} />
      <CategoryPreview />
      <section>
        <h2>Featured Products</h2>
        <div className="grid products">
          {products.map((p: any) => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
