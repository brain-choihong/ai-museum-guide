import UserSchema from 'models/User'
import 'models/dbConnect'
const jwt = require('jsonwebtoken')

export default async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const users = await UserSchema.ffindOne(
          { email: req.body.email },
          (err, user) => {
            if (!user) {
              return res.json({
                loginSuccess: false,
                message: 'Unvalid email',
              })
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
              if (!isMatch)
                return res.json({
                  loginSuccess: false,
                  message: 'Wrong password',
                })
              // 일치 시, 토큰 생성 후 쿠키에 저장
              user.generateToken((err, user) => {
                if (err) return res.status(400).send(err)
                // 토큰을 쿠키에 저장
                res.cookie('x_auth', user.token).status(200).json({
                  loginSuccess: true,
                  userId: user._id,
                })
              })
            })
          }
        )

        return res.status(200).json({
          success: true,
          data: users,
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
        })
      }
    case 'POST':
      try {
        const users = await UserSchema.create(req.body)
        return res.status(200).json({
          success: true,
          data: users,
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
        })
      }
    default:
      res.setHeaders('Allow', ['GET', 'POST'])
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`)
  }
}
