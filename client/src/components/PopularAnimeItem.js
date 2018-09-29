import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';

class PopularAnimeItem extends Component {
	handleOnClick = async () => {
		const { seriesName } = this.props;
		await this.props.fetchAnime(seriesName);
	};

	render () {
		const { seriesName, imageSrc, latestEpisode, updated } = this.props;
		return (
			<div className='popular-item-card' onClick={this.handleOnClick}>
				<Link to={`/video/${seriesName}`}>
					<p className='popular-item-title'>{seriesName}</p>
					<img src={imageSrc} className='popular-item-image' />
					<p className='popular-item-latestEpisode'>{latestEpisode}</p>
					<p className='popular-item-lastUpdated'>last updated: {updated}</p>
				</Link>
			</div>
		);
	}
}

export default connect(null, actions)(PopularAnimeItem);
