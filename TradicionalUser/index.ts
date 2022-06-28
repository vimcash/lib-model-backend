import { Schema } from './schema';
import { Document as document, model as mdl, Model as model} from "mongoose";
import { TradicionalUserTable } from 'vcl-interface';
import { Password } from '../services/password';

export interface TradicionalUserDocument extends document, TradicionalUserTable { }

interface Model extends model<TradicionalUserDocument> {
  build(atrib: TradicionalUserTable): TradicionalUserDocument;
  existUser(user: string, pass: string): Boolean;
}

Schema.statics.build = (atrib: TradicionalUserTable) => {
  return new TradicionalUserModel(atrib);
};

Schema.statics.existUser = async(user: string, pass: string) => {
  const usuarioExiste = await TradicionalUserModel.findOne({ username: user });
  return await Password.compare(
    usuarioExiste!.password,
    pass
  )
}

export const TradicionalUserModel = mdl<TradicionalUserDocument, Model>(
  'MDVC002T',
  Schema
);

export default TradicionalUserModel
