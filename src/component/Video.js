import React from "react";
import "../estilo/Video.css";
function Video({ Video }) {
  return (
    <>
      <div>
        <video 
           autoPlay loop muted
          src={require(`../recursos/playa.mp4`)}
          type="video/mp4"
        ></video>
      </div>
    </>
  );
}
export default Video;
