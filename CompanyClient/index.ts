import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { CompanyClientTable } from 'vcl-interface';

export interface CompanyClientTableDocument extends document, CompanyClientTable { }

interface Model extends model<CompanyClientTableDocument> {
  build(atrib: CompanyClientTable): CompanyClientTableDocument;
}

Schema.statics.build = (atrib: CompanyClientTable) => {
  return new CompanyClientTableModel(atrib);
};

export const CompanyClientTableModel = mdl<CompanyClientTableDocument, Model>(
  'MDVC006',
  Schema
);

export default CompanyClientTableModel
