import { Schema as schema } from 'mongoose';
import { active, createdAt, createdBy, productDesc, productName, updatedAt, updatedBy } from '../Core/Elements';

export const Schema = new schema
(
  {
    productName,
    productDesc,
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