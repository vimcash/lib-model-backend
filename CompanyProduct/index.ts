import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { CompanyProductTable } from 'vcl-interface';

export interface CompanyProductDocument extends document, CompanyProductTable { }

interface Model extends model<CompanyProductDocument> {
  build(atrib: CompanyProductTable): CompanyProductDocument;
}

Schema.statics.build = (atrib: CompanyProductTable) => {
  return new CompanyProductModel(atrib);
};

export const CompanyProductModel = mdl<CompanyProductDocument, Model>(
  'MDVC003C',
  Schema
);

export default CompanyProductModel
