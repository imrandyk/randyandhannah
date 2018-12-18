import React from 'react'
import PropTypes from 'prop-types'

function YoutubeEmbed({ width, height, videoId }) {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: '25px',
        height: 0,
      }}
    >
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

YoutubeEmbed.defaultProps = {
  width: 560,
  height: 315,
  videoId: null,
}

YoutubeEmbed.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  videoId: PropTypes.string,
}

export default YoutubeEmbed
