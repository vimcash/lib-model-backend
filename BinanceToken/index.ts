import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { BinanceTokenTable } from 'vcl-interface';

export interface BinanceTokenDocument extends document, BinanceTokenTable { }

interface Model extends model<BinanceTokenDocument> {
  build(atrib: BinanceTokenTable): BinanceTokenDocument;
}

Schema.statics.build = (atrib: BinanceTokenTable) => {
  return new BinanceTokenModel(atrib);
};

export const BinanceTokenModel = mdl<BinanceTokenDocument, Model>(
  'MDVC008',
  Schema
);

export default BinanceTokenModel
