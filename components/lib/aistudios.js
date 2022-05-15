export const getASToken = async () => {
  const genTokenUrl = process.env.NEXT_PUBLIC_GENERATE_TOKEN_URL;
  const response = await fetch(genTokenUrl);
  const data = await response.json();
  return data;
};

export const getVideoKey = async (token, desc) => {
  const makeVideoUrl = process.env.NEXT_PUBLIC_MAKE_VIDEO_URL;
  const reqData = JSON.stringify({
    appId: process.env.NEXT_PUBLIC_APPID,
    platform: process.env.NEXT_PUBLIC_PLATFORM,
    isClientToken: "true",
    token: token.trim(),
    uuid: process.env.NEXT_PUBLIC_UUID,
    sdk_v: process.env.NEXT_PUBLIC_SDK_V,
    clientHostname: process.env.NEXT_PUBLIC_CLIENTHOSTNAME,
    model: process.env.NEXT_PUBLIC_MODEL,
    language: process.env.NEXT_PUBLIC_LANGUAGE,
    text: desc.trim()
  });
  const response = await fetch(makeVideoUrl, {
    method: "POST",
    body: reqData,
  });
  const data = await response.json();
  return data;
};

export const getVideo = async (token, key) => {
  const getVideoUrl = process.env.NEXT_PUBLIC_GET_VIDEO_URL;
  const reqData = JSON.stringify({
    appId: process.env.NEXT_PUBLIC_APPID,
    platform: process.env.NEXT_PUBLIC_PLATFORM,
    isClientToken: "true",
    token: token,
    uuid: process.env.NEXT_PUBLIC_UUID,
    sdk_v: process.env.NEXT_PUBLIC_SDK_V,
    clientHostname: process.env.NEXT_PUBLIC_CLIENTHOSTNAME,
    key: key,
  });
  const response = await fetch(getVideoUrl, {
    method: "POST",
    body: reqData,
  });
  const data = await response.json();
  return data;
};