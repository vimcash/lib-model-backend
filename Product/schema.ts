import { Schema as schema } from 'mongoose';

export const Schema = new schema
(
  {
    productName: {
      type: String,
      uppercase: true,
      required: true,
    },
    productDesc: {
      type: String,
      lowercase: true,
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