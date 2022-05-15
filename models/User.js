import mongoose from 'mongoose'
const jwt = require('jsonwebtoken')

const User = new mongoose.Schema({
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

User.methods.comparePassword = function (inputPassword, cb) {
  if (inputPassword === this.password) {
    cb(null, true)
  } else {
    cb('error')
  }
}
User.methods.generateToken = function () {
  const token = jwt.sign(this._id.toHexString(), 'secretToken')
  this.token = token
  return this.save()
    .then(user => user)
    .catch(err => err)
}

User.statics.findByToken = function (token) {
  let user = this
  return jwt.verify(token, 'secretToken', function (err, decoded) {
    return user
      .findOne({ _id: decoded, token: token })
      .then(user => user)
      .catch(err => err)
  })
}
export default mongoose.models.User || mongoose.model('User', User)
