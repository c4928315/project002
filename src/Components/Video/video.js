import React from "react";
import videoFile from "../.././Assets/videoFile.mp4"
import "./video.css"

const VideoPlayer = () => {
  return (
    <div className="mainVideo">
      <video controls>
        <source
          src={videoFile}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
