import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

import PopularAnimeItem from './PopularAnimeItem';

class PopularAnimeList extends Component {
	componentWillMount = async () => {
		await this.props.fetchPopularAnime();
	};

	render () {
		return (
			<div className='popular-animeList-container'>
				{this.props.popularAnimeList.map(
					({ seriesName, imageSrc, latestEpisode, seriesUrl, updated }, index) => {
						return (
							<PopularAnimeItem
								key={index}
								id={index}
								seriesName={seriesName}
								imageSrc={imageSrc}
								latestEpisode={latestEpisode}
								seriesUrl={seriesUrl}
								updated={updated}
							/>
						);
					},
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ animeData: { popularAnimeList = [] } = {} }) => ({
	popularAnimeList,
});

export default connect(mapStateToProps, actions)(PopularAnimeList);
