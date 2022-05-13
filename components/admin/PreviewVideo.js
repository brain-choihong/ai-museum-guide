import { useRef, useEffect } from "react";

function PreviewVideo({ url }) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [url]);

  return (
    <video ref={videoRef} width="240" height="400" controls>
      <source src={url} type="video/mp4" />
    </video>
  );
}

export default PreviewVideo;