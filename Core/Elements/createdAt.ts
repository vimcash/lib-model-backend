import { Schema } from 'mongoose';

export const createdAt = {
  type: Schema.Types.Date,
  default: Date.now,
}