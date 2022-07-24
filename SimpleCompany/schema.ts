import { Schema as schema } from 'mongoose';
import { active, companyDesc, companyName, createdAt, createdBy, updatedAt, updatedBy } from '../Core/Elements';

export const Schema = new schema
(
  {
    companyName,
    companyDesc,
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
