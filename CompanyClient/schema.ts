import { Schema as schema } from 'mongoose';
import { companyID, clientID, createdAt, createdBy, updatedAt, updatedBy, active } from '../Core/Elements';

export const Schema = new schema
(
  {
    companyID,
    clientID,
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
