import { Password } from "../services/password"
export const hash = (pass: String) => Password.toHash(pass.toString());