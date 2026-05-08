import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Decipher Academy | Learning Access Hub',
  description: 'A premium educational landing page connecting students and parents to Decipher Academy portals, communities, and learning resources.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
