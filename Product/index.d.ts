import { Document as document, Model as model } from "mongoose";
import { ProductTable } from 'vcl-interface';
export interface ProductDocument extends document, ProductTable {
}
interface Model extends model<ProductDocument> {
    build(atrib: ProductTable): ProductDocument;
}
export declare const ProductModel: Model;
export default ProductModel;
