import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { InventoryTable } from 'vcl-interface';

export interface InventoryDocument extends document, InventoryTable { }

interface Model extends model<InventoryDocument> {
  build(atrib: InventoryTable): InventoryDocument;
}

Schema.statics.build = (atrib: InventoryTable) => {
  return new InventoryModel(atrib);
};

export const InventoryModel = mdl<InventoryDocument, Model>(
  'MDVC004',
  Schema
);

export default InventoryModel
