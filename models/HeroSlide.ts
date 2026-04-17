import { Schema, model, models } from 'mongoose';

const heroSlideSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    caption: { type: String, default: '' },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const HeroSlide = models.HeroSlide || model('HeroSlide', heroSlideSchema);
