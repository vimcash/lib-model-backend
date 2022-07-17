import { Schema as schema } from 'mongoose';

export const Schema = new schema
(
  {
    companyName: {
      type: String,
      uppercase: true,
      required: true,
      trim: true
    },
    companyDesc: {
      type: String,
      lowercase: true,
      trim: true
    },
    companyLocation: {
      type: String,
      lowercase: true,
      trim: true
    },
    companyPhone: {
      type: String,
      lowercase: true,
      trim: true
    },
    companyCode: {
      type: String,
      uppercase: true,
      trim: true
    },
    companyOwner: {
      type: String,
      uppercase: true,
      trim: true
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
