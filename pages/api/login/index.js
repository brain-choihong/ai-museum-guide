import User from 'models/User'
import '/models/dbConnect'
export default async (req, res) => {
  console.log()
  const { method } = req

  const text = JSON.parse(req.body)
  switch (method) {
    case 'POST':
      try {
        const users = await User.findOne({ email: text.email }, (err, user) => {
          console.log(user, 'user')

          if (!user) {
            return res.status(200).json({
              success: false,
              message: 'Unvalid email',
            })
          }
          // res.body.cookie('x_auth', user.token).status(200).json({
          //   success: true,
          //   userId: user._id,
          // })
          user.comparePassword(text.password, (err, isMatch) => {
            if (!isMatch)
              return res.status(200).json({
                loginSuccess: false,
                message: 'Wrong password',
              })
            // 일치 시, 토큰 생성 후 쿠키에 저장

            // user.generateToken((err, user) => {
            //   console.log(user, 'user-------------token')
            //   if (err) return res.status(400).send(err)
            // 토큰을 쿠키에 저장

            // })
          })
        })
          .clone()
          .catch(function (err) {
            console.log(err)
          })
        return res.status(200).json({
          success: true,
          data: users,
        })
      } catch (error) {
        console.log(error, 'error----------------')
        return res.status(400).json({
          success: false,
          message: error.message,
        })
      }
    default:
      res.setHeaders('Allow', ['POST'])
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`)
  }
}
