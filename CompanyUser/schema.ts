import { Schema as schema } from 'mongoose';
import { Password } from '../services/password'

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
    companyID: {
      type: String,
      required: true,
      lowercase: true,
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

Schema.pre('save', async function(this: any, done: any) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});
