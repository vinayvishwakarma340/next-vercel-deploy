import React from "react";

const YoutubeCard = (props) => {
  return (
    <div className="bg-white">
      <div className="flex-shrink-0">
        <iframe
          className="w-full overflow-hidden rounded-lg"
          src={props.data}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeCard;
