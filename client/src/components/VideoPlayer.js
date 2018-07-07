import React from 'react';
import Iframe from 'react-iframe';

const VideoPlayer = ({ videoSrc }) => {
  console.log('Here inside videoPlayer::', videoSrc);
  return (<div className="video-container">
    <Iframe
      width="100%"
      height="100%"
      url={ videoSrc || ''}
      allowFullScreen
    />
  </div>)
};

export default VideoPlayer;
