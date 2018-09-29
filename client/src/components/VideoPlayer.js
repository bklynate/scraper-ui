import React from 'react';
import Iframe from 'react-iframe-mod';

const VideoPlayer = ({ videoSrc }) => (
	<div className='video-container'>
		<Iframe
			width='100%'
			height='100%'
			url={videoSrc || ''}
			sandbox='allow-same-origin allow-scripts'
			allowFullScreen
		/>
	</div>
);

export default VideoPlayer;
