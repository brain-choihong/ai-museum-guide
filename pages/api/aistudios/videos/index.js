import { getVideo } from "components/lib/aistudios.js";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { token, key } = JSON.parse(req.body);
        const resultFinal = await getVideo(token, key);
        if (!resultFinal.data.hasOwnProperty("video")) {
          return res.status(200).json({
            success: true,
            pending: true,
            data: {
              token: token,
              key: key,
              progress: resultFinal.data.progress,
            },
          });
        }

        if (!resultFinal.success) {
          return res.status(500).json({ success: false, pending: false });
        }
        
        return res.status(200).json(resultFinal);

      } catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
  }
};
