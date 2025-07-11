import mongoose, { Document, Model, Schema } from "mongoose"
import * as bcrypt from "bcryptjs";

export interface UserDoc extends Document{
  name?: string,
  email?: string,
  password?: string,
  matchPassword?: (enteredPassword: string) => Promise<Boolean>
}

export interface UserModel extends Model<UserDoc>{
  matchPassword?: (enteredPassword: string) => Promise<Boolean>
}

export const DOCUMENT_NAME = "User"
export const COLLECTION_NAME = "users"

const userSchema = new Schema<UserDoc>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User: Model<UserDoc> = mongoose.model<UserDoc, UserModel>(DOCUMENT_NAME, userSchema, COLLECTION_NAME)

export default User
