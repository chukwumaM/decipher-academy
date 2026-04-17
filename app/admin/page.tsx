import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAdminToken } from '@/lib/auth';

async function getData() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || '';
  const [productsRes, ordersRes, statsRes] = await Promise.all([
    fetch(`${base}/api/products`, { cache: 'no-store' }),
    fetch(`${base}/api/orders`, { cache: 'no-store' }),
    fetch(`${base}/api/admin/stats`, { cache: 'no-store' })
  ]);
  return {
    products: await productsRes.json(),
    orders: await ordersRes.json(),
    stats: await statsRes.json()
  };
}

export default async function AdminPage() {
  const token = cookies().get('admin_token')?.value;
  if (!verifyAdminToken(token)) redirect('/admin/login');
  const { products, orders, stats } = await getData();

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <p>Weekly Orders: {stats.weeklyOrders} | Weekly Revenue: ₦{Number(stats.weeklyRevenue || 0).toLocaleString()}</p>

      <section>
        <h2>Products</h2>
        <p>Use API endpoints to add/edit/delete products from your CMS or Postman.</p>
        <div className="grid products">
          {products.map((p: any) => <div className="card" key={p._id}><h4>{p.name}</h4><p>{p.category}</p><p>Qty: {p.quantity}</p></div>)}
        </div>
      </section>

      <section>
        <h2>Orders</h2>
        {orders.map((o: any) => (
          <div key={o._id} className="card">
            <h4>{o.customerName} - ₦{o.totalAmount}</h4>
            <p>{o.phoneNumber}</p>
            <p>{o.paymentMethod} | {o.deliveryType}</p>
            <p>{o.expectedDeliveryTime}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
