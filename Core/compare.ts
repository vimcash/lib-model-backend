import { Password } from "../services/password"
export const compare = (hashPass: string, comparePass) => Password.compare(hashPass, comparePass);