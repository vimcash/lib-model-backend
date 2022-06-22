//import { Schema } from './schema';
import { BBTurnDevice } from "vcl-interface";


export interface Prueb extends BBTurnDevice {
  
}
/*export interface BBTurnDeviceDocument extends mongoose.Document, BBTurnDeviceTable { }

interface Model extends mongoose.Model<BBTurnDeviceDocument> {
  build(atrib: BBTurnDeviceTable): BBTurnDeviceDocument;
}

Schema.statics.build = (atrib: BBTurnDeviceTable) => {
  return new BBTurnDeviceModel(atrib);
};

export const BBTurnDeviceModel = mongoose.model<BBTurnDeviceDocument, Model>(
  'Device',
  Schema
);

export default BBTurnDeviceModel */
