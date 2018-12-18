import React from "react";
import PropTypes from "prop-types";

function YoutubeEmbed({ width, height, videoId }) {
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}

YoutubeEmbed.defaultProps = {
  width: 560,
  height: 315,
  videoId: null
};

YoutubeEmbed.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  videoId: PropTypes.string
};

export default YoutubeEmbed;
