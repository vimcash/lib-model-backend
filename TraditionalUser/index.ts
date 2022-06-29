import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { TraditionalUserTable } from 'vcl-interface';

export interface TraditionalUserDocument extends document, TraditionalUserTable { }

interface Model extends model<TraditionalUserDocument> {
  build(atrib: TraditionalUserTable): TraditionalUserDocument;
}

Schema.statics.build = (atrib: TraditionalUserTable) => {
  return new TraditionalUserModel(atrib);
};

export const TraditionalUserModel = mdl<TraditionalUserDocument, Model>(
  'MDVC002T',
  Schema
);

export default TraditionalUserModel
