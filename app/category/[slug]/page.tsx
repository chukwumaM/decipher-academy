import ProductCard from '@/components/ProductCard';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/products?category=${params.slug}`, { cache: 'no-store' });
  const products = await res.json();

  return (
    <div className="container">
      <h1>{params.slug.replace('-', ' ')}</h1>
      <div className="grid products">
        {products.map((p: any) => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
