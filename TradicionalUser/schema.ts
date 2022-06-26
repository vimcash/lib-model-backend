import { Schema as schema } from 'mongoose';

export const Schema = new schema
(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      lowecase: true,
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