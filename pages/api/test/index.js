import {getASToken, getVideoKey, getVideo} from '../../../components/lib/aistudios.js'

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const initData = await getASToken();
        const token = initData.token.trim();

        if (!initData.succeed) return res.status(500).json({ success: false });
        
        const resultMakeVideo = await getVideoKey(token);

        if (!resultMakeVideo.success) return res.status(500).json({ success: false });
        
        const key = resultMakeVideo.data.key.trim();
        let resultFinal = await getVideo(token, key);
        while (!resultFinal.data.hasOwnProperty('video')) {
          resultFinal = await getVideo(token, key);
          console.log(resultFinal.data.progress);
        }

        if (!resultFinal.success) return res.status(500).json({ success: false });
        return res.status(200).json(resultFinal);
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }
  }
};
