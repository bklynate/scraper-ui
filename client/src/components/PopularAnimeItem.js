import React from 'react';
import { Link } from 'react-router-dom';

const PopularAnimeItem = ({ id, seriesName, imageSrc, latestEpisode, updated }) => {
	return (
		<div className='popular-item-card'>
			<Link to={`/view/${id}`}>
				<p className='popular-item-title'>{seriesName}</p>
				<img src={imageSrc} className='popular-item-image' />
				<p className='popular-item-latestEpisode'>{latestEpisode}</p>
			</Link>
		</div>
	);
};

export default PopularAnimeItem;
