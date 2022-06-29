import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { CompanyUserTable } from 'vcl-interface';

export interface CompanyUserDocument extends document, CompanyUserTable { }

interface Model extends model<CompanyUserDocument> {
  build(atrib: CompanyUserTable): CompanyUserDocument;
}

Schema.statics.build = (atrib: CompanyUserTable) => {
  return new CompanyUserModel(atrib);
};

export const CompanyUserModel = mdl<CompanyUserDocument, Model>(
  'MDVC002T',
  Schema
);

export default CompanyUserModel
