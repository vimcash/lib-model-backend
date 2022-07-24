import { Schema as schema } from 'mongoose';
import { companyID, productName, productDesc, createdAt, createdBy, updatedAt, updatedBy, active, serviceTime } from '../Core/Elements';
export const Schema = new schema
(
  {
    companyID,
    productName,
    productDesc,
    serviceTime,
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