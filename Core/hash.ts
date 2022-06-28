import { Password } from "../services/password"
export const hash = (pass: string ) => Password.toHash(pass);