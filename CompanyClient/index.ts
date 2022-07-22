import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { CompanyClientTable } from 'vcl-interface';

export interface CompanyClientDocument extends document, CompanyClientTable { }

interface Model extends model<CompanyClientDocument> {
  build(atrib: CompanyClientTable): CompanyClientDocument;
}

Schema.statics.build = (atrib: CompanyClientTable) => {
  return new CompanyClientModel(atrib);
};

export const CompanyClientModel = mdl<CompanyClientDocument, Model>(
  'MDVC006',
  Schema
);

export default CompanyClientModel
