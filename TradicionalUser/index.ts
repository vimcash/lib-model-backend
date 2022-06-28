import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { TradicionalUserTable } from 'vcl-interface';
import { Password } from '../services/password';

export interface TradicionalUserDocument extends document, TradicionalUserTable { }

interface Model extends model<TradicionalUserDocument> {
  build(atrib: TradicionalUserTable): TradicionalUserDocument;
}

Schema.statics.build = (atrib: TradicionalUserTable) => {
  return new TradicionalUserModel(atrib);
};

export const TradicionalUserModel = mdl<TradicionalUserDocument, Model>(
  'MDVC002T',
  Schema
);

export default TradicionalUserModel
