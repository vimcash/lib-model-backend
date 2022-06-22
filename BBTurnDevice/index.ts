import * as mongoose from "mongoose";
//import { Schema } from './schema';
import { Greeter } from "my-awesome-greeter"


export const HolaMundo = () => {
  console.log(Greeter("Miguel Pablo"));
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
