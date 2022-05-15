import User from 'models/User'
import '/models/dbConnect'

export default async (req, res) => {
  const { method } = req
  console.log(method, 'method')

  switch (method) {
    case 'POST':
      try {
        console.log(req.body)
        const users = await User.create(JSON.parse(req.body))
        return res.status(201).json({
          success: true,
          data: users,
        })
      } catch (error) {
        console.log(error.message)
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
