import "videojs-youtube";

const PlayerCSS = () => {
  return (
    <>
      <h1>
        <a href="http://uln.news/" target="_blank">
          Хятадын цагаан хэрэм хэр урт гэж бодож байна ?
        </a>
      </h1>
      <div data-vjs-player>
        <video
          id="my-video"
          className="video-js vjs-theme-city"
          playsInline
          height={500}
          controls
          preload="auto"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=1ZCwGRR1N10"}] }'
        ></video>
      </div>
    </>
  );
};

export default PlayerCSS;
