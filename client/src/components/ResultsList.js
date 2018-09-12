import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import ResultItem from './ResultItem';

class ResultsList extends Component {
	renderLoading = () => {
		return <BeatLoader size={20} margin='20px' color={'#EC6F75'} />;
	};

	renderResultsList = () => {
		const { loading, animeList = [] } = this.props.data || {};

		if (loading) return <BeatLoader size={20} margin={'20px'} color={'#EC6f75'} />;
		return animeList.map(({ seriesName, seriesUrl }, index) => (
			<ResultItem key={index} id={index} seriesName={seriesName} seriesUrl={seriesUrl} />
		));
	};

	render () {
		const { loading, animeList = [] } = this.props.data || {};
		return (
			<div className='results-list'>
				{animeList.length || loading ? '' : <h3>0 search results...</h3>}
				{this.renderResultsList()}
			</div>
		);
	}
}

const mapStateToProps = ({ animeData: data = {} }) => {
	return {
		data,
	};
};

export default connect(mapStateToProps)(ResultsList);
