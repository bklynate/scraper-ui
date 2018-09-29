import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import VideoPlayer from './VideoPlayer';
import * as actions from './../actions';

class AnimePage extends Component {
	state = {
		videoSrc: '',
	};

	async componentDidMount () {
		const animeEpisodeToFetch = this.getAnimeEpisodeToFetch();
		if (
			Object.keys(animeEpisodeToFetch).length === 0 &&
			animeEpisodeToFetch.constructor === Object
		) {
			const { history } = this.props;
			return history.push('/searchAnime');
		}
		await this.props.fetchAnimeEpisode(animeEpisodeToFetch);
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		const { episodeListData: { episodeList: nextEpisodeList = [] } = {} } = nextProps || {};
		const { episodeListData: { episodeList: currentEpisodeList = [] } = {} } = this.props || {};
		return currentEpisodeList !== nextEpisodeList || this.state.videoSrc !== nextState.videoSrc;
	};

	getVideoSrc = e => {
		const videoSrc = e.currentTarget.attributes[0].textContent.replace('https://', 'https://www.');
		this.setState({ videoSrc });
	};

	getAnimeEpisodeToFetch = () => {
		const { animeList = [], popularAnimeList = [] } = this.props.data;
		const [ searchedAnimeEpisode = {} ] = animeList.filter(this.findAnimeEpisode);
		const [ popularAnimeListEpisode = {} ] = popularAnimeList.filter(this.findAnimeEpisode);
		return searchedAnimeEpisode.seriesName ? searchedAnimeEpisode : popularAnimeListEpisode;
	};

	findAnimeEpisode = ({ seriesName }) => {
		const { seriesName: seriesNameParam = '' } = this.props.match.params || {};
		return seriesName === seriesNameParam;
	};

	renderAnimeTitle = ({ seriesName = '' }) => {
		return seriesName;
	};

	renderAnimeEpisodeList = () => {
		const { loading } = this.props.episodeListData || {};
		const { episodeListData: { episodeList = [] } = {} } = this.props || {};

		if (loading) return <BounceLoader size={60} color={'#EC6F75'} />;

		return episodeList.map((episode, index) => (
			<div key={index} className='chip'>
				<a value={episode} onClick={this.getVideoSrc}>
					{`Episode: ${index + 1}`}
				</a>
			</div>
		));
	};

	render () {
		const { videoSrc } = this.state;
		const animeEpisode = this.getAnimeEpisodeToFetch();

		return (
			<div className='container'>
				{animeEpisode === undefined ? (
					<Redirect to='/searchAnime' />
				) : (
					<h1>{this.renderAnimeTitle(animeEpisode)}</h1>
				)}

				<div className='animePage-list'>{this.renderAnimeEpisodeList()}</div>
				<VideoPlayer videoSrc={videoSrc} />
			</div>
		);
	}
}

const mapStateToProps = ({ animeData: data = {}, episodeListData = {} }) => {
	return {
		data,
		episodeListData,
	};
};

export default connect(mapStateToProps, actions)(AnimePage);
