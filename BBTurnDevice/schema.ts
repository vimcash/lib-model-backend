import mongoose from 'mongoose';
import { DeviceStatus } from 'vcl-interface';

export const Schema = new mongoose.Schema
(
  {
    companyID: {
      type: String,
      required: true,
    },
    deviceNickname: {
      type: String,
      required: true,
      lowercase: true,
    },
    deviceNumber: {
      type: String,
      required: true,
    },
    deviceStatus: {
      type: String,
      required: true,
      enum: Object.values(DeviceStatus),
      default: DeviceStatus.user,
    },
    createdAt: {
      type: mongoose.Schema.Types.Date,
      default: Date.now,
    },
    createdBy: {
      type: String,
      lowercase: true
    },
    udpatedAt: {
      type: mongoose.Schema.Types.Date,
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