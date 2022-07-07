import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { CompanyInventoryTable } from 'vcl-interface';

export interface CompanyInventoryDocument extends document, CompanyInventoryTable { }

interface Model extends model<CompanyInventoryDocument> {
  build(atrib: CompanyInventoryTable): CompanyInventoryDocument;
}

Schema.statics.build = (atrib: CompanyInventoryTable) => {
  return new CompanyInventoryModel(atrib);
};

export const CompanyInventoryModel = mdl<CompanyInventoryDocument, Model>(
  'MDVC004C',
  Schema
);

export default CompanyInventoryModel
