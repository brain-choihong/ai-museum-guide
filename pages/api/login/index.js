import User from "models/User";
import "/models/dbConnect";
export default async (req, res) => {
  console.log();
  const { method } = req;

  const text = JSON.parse(req.body);
  switch (method) {
    case "POST":
      try {
        const users = await User.findOne({ email: text.email }, (err, user) => {})
          .clone()
          .catch(function (err) {
            console.log(err);
            return res.status(400).json({
              success: false,
              message: error.message,
            });
          });

        // email 확인
        if (!users) {
          return res.status(400).json({
            success: false,
            message: "Unvalid email",
          });
        }

        // password 확인
        users.comparePassword(text.password, (err, isMatch) => {
          if (!isMatch)
            return res.status(400).json({
              loginSuccess: false,
              message: "Wrong password",
            });
        });
        console.log(users);
        // 성공
        return res.status(200).json({
          success: true,
          data: users,
        });
      } catch (error) {
        console.log(error, "error----------------");
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    default:
      res.setHeaders("Allow", ["POST"]);
      return res.status(405).json({ success: false }).end(`Method ${method} Not Allowed`);
  }
};
