import { Schema as schema } from 'mongoose';
import { active, apiKey, apiSecret, createdAt, createdBy, firstName, lastName, telegramID, updatedAt, updatedBy } from '../Core/Elements';

export const Schema = new schema
(
  {
    telegramID,
    firstName,
    lastName,
    apiKey,
    apiSecret,
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
