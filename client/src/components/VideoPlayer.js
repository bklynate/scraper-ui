import React from 'react';
import Iframe from 'react-iframe';

const styles = {
  maxWidth: '100%'
}
const VideoPlayer = ({ videoSrc }) => (
  <div>
    <Iframe
      width="100%"
      height="100%"
      url={ videoSrc || ''}
    />
  </div>
);

export default VideoPlayer;
