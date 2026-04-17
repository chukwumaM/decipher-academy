import { Schema, model, models } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [{ type: String }],
    quantity: { type: Number, default: 0 },
    imageUrl: { type: String, required: true },
    featured: { type: Boolean, default: false },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

productSchema.virtual('stockStatus').get(function (this: any) {
  return this.quantity > 0 ? 'In Stock' : 'Out of Stock';
});

export const Product = models.Product || model('Product', productSchema);
