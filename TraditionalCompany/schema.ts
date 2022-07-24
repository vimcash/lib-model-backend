import { Schema as schema } from 'mongoose';
import { companyName, companyDesc, companyLocation, companyPhone, companyCode, companyOwner, createdAt, createdBy, updatedAt, updatedBy, active } from '../Core/Elements';

export const Schema = new schema
(
  {
    companyName,
    companyDesc,
    companyLocation,
    companyPhone,
    companyCode,
    companyOwner,
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
