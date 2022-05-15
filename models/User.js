import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'password is required!'],
    trim: true,
  },
  nickname: { type: String, required: [true, 'nickname is required!'] },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Register || mongoose.model('User', UserSchema)
