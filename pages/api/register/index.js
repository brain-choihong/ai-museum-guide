import UserSchema from '/models/User'
import '/models/dbConnect'

export default async (req, res) => {
  const { method } = req

  switch (method) {
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
