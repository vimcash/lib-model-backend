import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { ProductTable } from 'vcl-interface';

export interface ProductDocument extends document, ProductTable { }

interface Model extends model<ProductDocument> {
  build(atrib: ProductTable): ProductDocument;
}

Schema.statics.build = (atrib: ProductTable) => {
  return new ProductModel(atrib);
};

export const ProductModel = mdl<ProductDocument, Model>(
  'MDVC003',
  Schema
);

export default ProductModel
