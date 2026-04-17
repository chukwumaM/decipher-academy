import Link from 'next/link';

const categories = [
  'mens-wear',
  'female-wear',
  'corporate-wear',
  'shoes',
  'bags',
  'household-accessories'
];

export default function CategoryPreview() {
  return (
    <section>
      <h2>Categories</h2>
      <div className="grid categories">
        {categories.map((c) => (
          <Link key={c} href={`/category/${c}`} className="category-tile">{c.replace('-', ' ')}</Link>
        ))}
      </div>
    </section>
  );
}
