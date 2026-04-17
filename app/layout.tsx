import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CartProvider } from '@/context/CartContext';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Wendy Luxury',
  description: 'Luxury fashion e-commerce store'
};

const categories = ['mens-wear', 'female-wear', 'corporate-wear', 'shoes', 'bags', 'household-accessories'];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="nav">
            <Link href="/" className="brand">Wendy Luxury</Link>
            <nav>
              {categories.map((c) => (
                <Link key={c} href={`/category/${c}`} className="nav-link">{c.replace('-', ' ')}</Link>
              ))}
              <Link href="/cart" className="nav-link">Cart</Link>
              <Link href="/admin/login" className="nav-link">Admin</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <h4>Policies</h4>
            <p>Refunds are only valid within 24 hours after receiving the product.</p>
            <p>Delivery: Lagos within 24 hours, outside Lagos in 3–5 working days.</p>
            <p>Pickup Days: Tuesday, Thursday, Saturday.</p>
          </footer>
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
