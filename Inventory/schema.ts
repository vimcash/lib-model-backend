import { Schema as schema } from 'mongoose';

export const Schema = new schema
(
  {
    productID: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    productQty: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: schema.Types.Date,
      default: Date.now,
    },
    createdBy: {
      type: String,
      lowercase: true,
      trim: true
    },
    udpatedAt: {
      type: schema.Types.Date,
      default: Date.now,
    },
    updatedBy: {
      type: String,
      lowercase: true,
      trim: true
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);