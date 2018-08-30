import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import ResultItem from './ResultItem';

class ResultsList extends Component {
	state = {
		loading: false,
	};

	shouldComponentUpdate = (nextProps, nextState) => {
		return this.props.anime !== nextProps.anime;
	};

	componentWillReceiveProps = (nextProps) => {
		const { anime: nextAnimeList } = nextProps;
		const { anime: currentAnimeList } = this.props;
		if (nextAnimeList !== currentAnimeList) this.setState({ loading: false });
	};

	componentDidUpdate = (prevProps, prevState) => {
		console.log('inside componentDidUpdate::', prevProps, prevState);
	};

	renderResultsList = () => {
		const { loading } = this.state;
		this.setState({ loading: true });
		const { anime: animeArray = [] } = this.props || {};

		if (animeArray.length) {
			return animeArray.map(({ seriesName, seriesUrl }, index) => (
				<ResultItem key={index} id={index} seriesName={seriesName} seriesUrl={seriesUrl} />
			));

			if (loading) return <BeatLoader size={20} margin="20px" color={'#EC6F75'} />;
		}
	};

	render() {
		const { loading } = this.state;
		console.log('loading::', loading);
		console.log(this.props.anime.length);

		return (
			<div className="results-list">
				{this.props.anime.length ? '' : <h3>0 search results...</h3>}
				{this.renderResultsList()}
			</div>
		);
	}
}

const mapStateToProps = ({ anime = [] }) => {
	return {
		anime,
	};
};

export default connect(mapStateToProps)(ResultsList);
