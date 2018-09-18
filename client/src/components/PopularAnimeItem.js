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
		const { id, seriesName, imageSrc, latestEpisode, updated } = this.props;
		return (
			<div className='popular-item-card' onClick={this.handleOnClick}>
				<Link to={`/view/${id}`}>
					<p className='popular-item-title'>{seriesName}</p>
					<img src={imageSrc} className='popular-item-image' />
					<p className='popular-item-latestEpisode'>{latestEpisode}</p>
				</Link>
			</div>
		);
	}
}

export default connect(null, actions)(PopularAnimeItem);
