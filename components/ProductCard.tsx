'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes?.[0] || '');
  const inStock = product.quantity > 0;

  return (
    <article className="card">
      <img src={product.imageUrl} alt={product.name} className="card-image" />
      <h3>{product.name}</h3>
      <p className="price">₦{product.price.toLocaleString()}</p>
      <p>Stock: {product.quantity} ({inStock ? 'In Stock' : 'Out of Stock'})</p>
      {product.sizes?.length > 0 && (
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {product.sizes.map((s) => <option key={s}>{s}</option>)}
        </select>
      )}
      <button disabled={!inStock} onClick={() => addItem(product, size)}>{inStock ? 'Add to Cart' : 'Out of Stock'}</button>
    </article>
  );
}
