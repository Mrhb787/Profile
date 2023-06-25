import BackgroundVideo from "../videos/anime-bg.mp4";

const VideoBG = () => {
  return (
    <video autoPlay muted loop className="videobg">
      <source src={BackgroundVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default VideoBG;
