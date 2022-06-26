import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { TradicionalUserTable } from 'vcl-interface';

export interface TradicionalUserDocument extends document, TradicionalUserTable { }

interface Model extends model<TradicionalUserDocument> {
  build(atrib: TradicionalUserTable): TradicionalUserDocument;
}

Schema.statics.build = (atrib: TradicionalUserTable) => {
  return new TradicionalUserModel(atrib);
};

export const TradicionalUserModel = mdl<TradicionalUserDocument, Model>(
  'User',
  Schema
);

export default TradicionalUserModel