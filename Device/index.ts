import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { DeviceTable } from "vcl-interface";

export interface DeviceDocument extends document, DeviceTable { }

interface Model extends model<DeviceDocument> {
  build(atrib: DeviceTable): DeviceDocument;
}

Schema.statics.build = (atrib: DeviceTable) => {
  return new DeviceModel(atrib);
};

export const DeviceModel = mdl<DeviceDocument, Model>(
  'MDVC0010',
  Schema
);

export default DeviceModel
