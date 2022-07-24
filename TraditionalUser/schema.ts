import { Schema as schema } from 'mongoose';
import { username, password, firstName, lastName, phoneNumber, email, createdAt, createdBy, updatedAt, updatedBy, active } from '../Core/Elements';
import { Password } from '../services/password'

export const Schema = new schema
(
  {
    username,
    password,
    firstName,
    lastName,
    phoneNumber,
    email,
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

Schema.pre('save', async function(this: any, done: any) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});
