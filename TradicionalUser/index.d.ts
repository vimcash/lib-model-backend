import { Document as document, Model as model } from "mongoose";
import { TradicionalUserTable } from 'vcl-interface';
export interface TradicionalUserDocument extends document, TradicionalUserTable {
}
interface Model extends model<TradicionalUserDocument> {
    build(atrib: TradicionalUserTable): TradicionalUserDocument;
}
export declare const TradicionalUserModel: Model;
export default TradicionalUserModel;
