import { Document as document, Model as model } from "mongoose";
import { BBTurnDeviceTable } from "vcl-interface";
export interface BBTurnDeviceDocument extends document, BBTurnDeviceTable {
}
interface Model extends model<BBTurnDeviceDocument> {
    build(atrib: BBTurnDeviceTable): BBTurnDeviceDocument;
}
export declare const BBTurnDeviceModel: Model;
export default BBTurnDeviceModel;
