'use client';

import { FormEvent, useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [proof, setProof] = useState<File | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const paymentMethod = String(form.get('paymentMethod'));

    let proofUrl = '';
    if (paymentMethod === 'bank-transfer' && proof) {
      const uploadData = new FormData();
      uploadData.append('file', proof);
      const uploadRes = await fetch('/api/upload', { method: 'POST', body: uploadData });
      const uploadJson = await uploadRes.json();
      proofUrl = uploadJson.url;
    }

    const payload = {
      customerName: form.get('name'),
      phoneNumber: form.get('phone'),
      deliveryAddress: form.get('address'),
      state: form.get('state'),
      pickupDay: form.get('pickupDay'),
      paymentMethod,
      paymentProofUrl: proofUrl,
      deliveryType: form.get('deliveryType'),
      items,
      totalAmount: total
    };

    const orderRes = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const order = await orderRes.json();

    if (paymentMethod === 'paystack') {
      const pRes = await fetch('/api/paystack/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total, email: `${payload.phoneNumber}@wendyluxury.local`, reference: order._id })
      });
      const pJson = await pRes.json();
      if (pJson.url) window.location.href = pJson.url;
    }

    clear();
    setMessage('Order placed successfully. We will contact you shortly for confirmation.');
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Checkout</h1>
      <p>Lagos: delivery within 24 hours. Outside Lagos: 3–5 working days.</p>
      <form className="checkout" onSubmit={onSubmit}>
        <input name="name" placeholder="Full Name" required />
        <input name="phone" placeholder="Phone Number" required />
        <input name="address" placeholder="Delivery Address" required />
        <select name="state" required>
          <option value="Lagos">Lagos</option>
          <option value="Outside Lagos">Outside Lagos</option>
        </select>
        <select name="deliveryType" required>
          <option value="delivery">Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
        <select name="pickupDay">
          <option value="Tuesday">Tuesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Saturday">Saturday</option>
        </select>
        <select name="paymentMethod" required>
          <option value="paystack">Paystack (Card)</option>
          <option value="bank-transfer">Manual Bank Transfer</option>
        </select>
        <div className="bank-box">
          <p>Bank Transfer: 0123456789 - Wendy Luxury Ventures - Zenith Bank</p>
          <input type="file" accept="image/*" onChange={(e) => setProof(e.target.files?.[0] || null)} />
        </div>
        <button disabled={loading || !items.length}>{loading ? 'Processing...' : `Pay ₦${total.toLocaleString()}`}</button>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
}
