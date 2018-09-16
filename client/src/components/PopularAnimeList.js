import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

const PopularAnimeList = props => {
	return (
		<div>
			<h1> HELLO WORLD</h1>
			<button onClick={() => props.fetchPopularAnime()}>Click Here</button>
		</div>
	);
};

const mapStateToProps = (state) => {
  console.log('Here is state', state)

}

export default connect(mapStateToProps, actions)(PopularAnimeList);
