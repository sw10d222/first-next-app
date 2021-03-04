import { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-youtube";

const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) return;
    const player = videojs(videoEl, props);
    return () => {
      player.dispose();
    };
  }, [props, videoEl]);

  return (
    <>
      <h1>
        <a
          href="https://medium.com/@MisterJantsan/%D1%85%D1%8F%D1%82%D0%B0%D0%B4-%E4%B8%AD%E5%9B%BD-58dc8b94b8f0"
          target="_blank"
        >
          2019 оны намар Бээжинд хийсэн үүргэвчтэй аялал{" "}
        </a>{" "}
      </h1>
      <div data-vjs-player>
        <video height={500} ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  );
};

export default Player;
