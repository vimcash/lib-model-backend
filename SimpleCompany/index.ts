import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { SimpleCompanyTable } from 'vcl-interface';

export interface SimpleCompanyDocument extends document, SimpleCompanyTable { }

interface Model extends model<SimpleCompanyDocument> {
  build(atrib: SimpleCompanyTable): SimpleCompanyDocument;
}

Schema.statics.build = (atrib: SimpleCompanyTable) => {
  return new SimpleCompanyModel(atrib);
};

export const SimpleCompanyModel = mdl<SimpleCompanyDocument, Model>(
  'MDVC005S',
  Schema
);

export default SimpleCompanyModel
