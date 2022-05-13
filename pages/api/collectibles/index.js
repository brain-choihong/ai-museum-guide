import Collectible from "/models/Collectible";
import "/models/dbConnect";

export default async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const collectibles = await Collectible.find({}).sort({
          createdAt: "desc",
        });
        return res.status(200).json({
          success: true,
          data: collectibles,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    case "POST":
      try {
        await Collectible.create(JSON.parse(req.body));
        return res.status(201).json({
          success: true,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).json({ success: false }).end(`Method ${method} Not Allowed`);
  }
};
