export const username = {
  type: String,
  required: true,
  lowercase: true,
  unique: true,
  trim: true
}