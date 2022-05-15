import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  nickname: { type: String, required: true },
})

export default mongoose.models.Register || mongoose.model('User', UserSchema)
