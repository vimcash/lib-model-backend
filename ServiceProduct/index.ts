import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { ServiceProductTable } from 'vcl-interface';

export interface ServiceProductDocument extends document, ServiceProductTable { }

interface Model extends model<ServiceProductDocument> {
  build(atrib: ServiceProductTable): ServiceProductDocument;
}

Schema.statics.build = (atrib: ServiceProductTable) => {
  return new ServiceProductModel(atrib);
};

export const ServiceProductModel = mdl<ServiceProductDocument, Model>(
  'MDVC003S',
  Schema
);

export default ServiceProductModel
