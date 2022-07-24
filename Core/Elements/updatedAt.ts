import { Schema } from 'mongoose';

export const updatedAt = {
  type: Schema.Types.Date,
  default: Date.now,
}