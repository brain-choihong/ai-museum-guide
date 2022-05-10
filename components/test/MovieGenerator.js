import { useState, useEffect } from "react";

export default function MovieGenerator() {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const proccessReq = async () => {
      setIsLoading(true);
      const genTokenUrl = "/api/test";
      const response = await fetch(genTokenUrl);
      const responseData = await response.json();
  
      setVideoUrl(responseData.data.video);
      setIsLoading(false);
    };
    proccessReq().catch((error) => {
      setIsLoading(false);
      console.log(error.message);
    });

    return () => {
      setIsLoading(false);
    }
  },[]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <h1>{videoUrl}</h1>}
    </>
  );
}
