import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClimbingBoxLoader } from 'react-spinners';

import ResultItem from './ResultItem';

class ResultsList extends Component {
	renderLoading = () => (
		<div className='result-loader'>
			<ClimbingBoxLoader size={20} margin='20px' color={'#222'} />
		</div>
	);

	renderDefaultScreen = () => (
		<div className='result-default-message'>
			<h3>0 search results...</h3>
		</div>
	);

	renderResultsList = () => {
		const { loading, animeList = [] } = this.props.data || {};

		if (loading) return this.renderLoading();

		return animeList.map(({ seriesName, seriesUrl }, index) => (
			<ResultItem key={index} id={index} seriesName={seriesName} seriesUrl={seriesUrl} />
		));
	};

	render () {
		const { loading, animeList = [] } = this.props.data || {};

		return (
			<div className='results-list'>
				{animeList.length || loading ? '' : this.renderDefaultScreen()}
				{this.renderResultsList()}
			</div>
		);
	}
}

const mapStateToProps = ({ animeData: data = {} }) => ({ data });

export default connect(mapStateToProps)(ResultsList);
