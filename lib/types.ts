export type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  quantity: number;
  imageUrl: string;
  featured?: boolean;
  description?: string;
};

export type CartItem = Product & { qty: number; selectedSize?: string };
