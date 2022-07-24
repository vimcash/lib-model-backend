import { Schema as schema } from 'mongoose';
import { productID, productQty, createdAt, createdBy, updatedAt, updatedBy, active } from "../Core/Elements";

export const Schema = new schema
(
  {
    productID,
    productQty,
    createdAt,
    createdBy,
    updatedAt,
    updatedBy,
    active
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