import { Document as document, Model as model } from "mongoose";
import { InventoryTable } from 'vcl-interface';
export interface InventoryDocument extends document, InventoryTable {
}
interface Model extends model<InventoryDocument> {
    build(atrib: InventoryTable): InventoryDocument;
}
export declare const InventoryModel: Model;
export default InventoryModel;
