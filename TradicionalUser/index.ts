import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { BBTurnDeviceTable } from "vcl-interface";

export interface BBTurnDeviceDocument extends document, BBTurnDeviceTable { }

interface Model extends model<BBTurnDeviceDocument> {
  build(atrib: BBTurnDeviceTable): BBTurnDeviceDocument;
}

Schema.statics.build = (atrib: BBTurnDeviceTable) => {
  return new BBTurnDeviceModel(atrib);
};

export const BBTurnDeviceModel = mdl<BBTurnDeviceDocument, Model>(
  'Device',
  Schema
);

export default BBTurnDeviceModel
