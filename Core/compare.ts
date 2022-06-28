import { Password } from "../services/password"
export const compare = (hashPass: String, comparePass) => Password.compare(hashPass, comparePass);