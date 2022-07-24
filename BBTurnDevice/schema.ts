import { Schema as schema } from 'mongoose';
import { deviceNickname, deviceNumber, deviceStatus, createdAt,createdBy, updatedAt, updatedBy, active } from '../Core/Elements';

export const Schema = new schema
(
  {
    deviceNickname,
    deviceNumber,
    deviceStatus,
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