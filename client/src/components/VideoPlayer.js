import React from 'react';
import Iframe from 'react-iframe';

const VideoPlayer = ({ videoSrc }) => (
  <div>
    <Iframe
      url={ videoSrc || ''}
    />
  </div>
);

export default VideoPlayer;
