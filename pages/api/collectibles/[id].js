import Collectible from "/models/Collectible";
import "/models/dbConnect";

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const collectible = await Collectible.findById(id);

        return res.status(200).json({
          success: true,
          data: collectible,
        });
      } catch (error) {
        return res.status(404).json({
          success: false,
          message: error.message,
        });
      }
    case "PUT":
      await Collectible.findByIdAndUpdate(id, { ...req.body, updateAt: Date.now() }, (err) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
          });
        } else {
          return res.status(200).json({
            success: true,
          });
        }
      });
    case "DELETE":
      await Collectible.findByIdAndDelete(id, (err) => {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err,
          });
        } else {
          return res.status(200).json({
            success: true,
          });
        }
      });
    default:
      res.setHeaders("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).json({ success: false }).end(`Method ${method} Not Allowed`);
  }
};
