'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, total, updateQty, removeItem } = useCart();

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {!items.length ? <p>Cart is empty.</p> : items.map((item) => (
        <div key={`${item._id}-${item.selectedSize}`} className="cart-row">
          <span>{item.name} ({item.selectedSize || 'One size'})</span>
          <input type="number" min={1} value={item.qty} onChange={(e) => updateQty(item._id, Number(e.target.value), item.selectedSize)} />
          <span>₦{(item.qty * item.price).toLocaleString()}</span>
          <button onClick={() => removeItem(item._id, item.selectedSize)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₦{total.toLocaleString()}</h3>
      <Link className="button-link" href="/checkout">Proceed to Checkout</Link>
    </div>
  );
}
