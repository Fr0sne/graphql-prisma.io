import { genSalt, hash } from "bcrypt"


export async function hashpass(password: string){
  const salt = await genSalt(6, 'a')
  const hashed = await hash(password, salt)
  return hashed;
}