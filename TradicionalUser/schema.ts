import { Schema as schema } from 'mongoose';

export const Schema = new schema
(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      uppercase: true,
    },
    lastName: {
      type: String,
      required: true,
      uppercase: true,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      lowecase: true,
    },
    createdAt: {
      type: schema.Types.Date,
      default: Date.now,
    },
    createdBy: {
      type: String,
      lowercase: true
    },
    udpatedAt: {
      type: schema.Types.Date,
      default: Date.now,
    },
    updatedBy: {
      type: String,
      lowercase: true
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