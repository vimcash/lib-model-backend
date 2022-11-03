import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { CollabUserTable } from 'vcl-interface';

export interface CollabUserDocument extends document, CollabUserTable { }

interface Model extends model<CollabUserDocument> {
  build(atrib: CollabUserTable): CollabUserDocument;
}

Schema.statics.build = (atrib: CollabUserTable) => {
  return new CollabUserModel(atrib);
};

export const CollabUserModel = mdl<CollabUserDocument, Model>(
  'MDVC002CU',
  Schema
);
export default CollabUserModel
