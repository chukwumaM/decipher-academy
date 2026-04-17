import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema(
  {
    customerName: String,
    phoneNumber: String,
    deliveryAddress: String,
    state: { type: String, enum: ['Lagos', 'Outside Lagos'] },
    pickupDay: String,
    items: [
      {
        productId: String,
        name: String,
        qty: Number,
        price: Number,
        size: String
      }
    ],
    totalAmount: Number,
    paymentMethod: { type: String, enum: ['paystack', 'bank-transfer'] },
    paymentProofUrl: String,
    deliveryType: { type: String, enum: ['delivery', 'pickup'] },
    expectedDeliveryTime: String,
    paymentStatus: { type: String, default: 'pending' }
  },
  { timestamps: true }
);

export const Order = models.Order || model('Order', orderSchema);
