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
      try {
        await Collectible.findByIdAndUpdate(
          id,
          { ...JSON.parse(req.body), updateAt: Date.now() }
        );
        return res.status(200).json({
          success: true,
        });
      } catch (error) {
        console.log(error.message)
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    case "DELETE":
      try {
        await Collectible.deleteOne({ _id: id });
        return res.status(200).json({
          success: true,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

    default:
      res.setHeaders("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).json({ success: false }).end(`Method ${method} Not Allowed`);
  }
};
