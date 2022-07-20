import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { TraditionalCompany } from 'vcl-interface';

export interface TraditionalCompanyDocument extends document, TraditionalCompany { }

interface Model extends model<TraditionalCompanyDocument> {
  build(atrib: TraditionalCompany): TraditionalCompanyDocument;
}

Schema.statics.build = (atrib: TraditionalCompany) => {
  return new TraditionalCompanyModel(atrib);
};

export const TraditionalCompanyModel = mdl<TraditionalCompanyDocument, Model>(
  'MDVC005T',
  Schema
);

export default TraditionalCompanyModel
