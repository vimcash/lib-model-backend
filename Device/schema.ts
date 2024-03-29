import { Schema as schema } from 'mongoose';
import { deviceNickname, deviceCode, deviceStatus, createdAt,createdBy, updatedAt, updatedBy, active, type } from '../Core/Elements';

export const Schema = new schema
(
  {
    deviceNickname,
    deviceCode,
    deviceStatus,
    type,
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