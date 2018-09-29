import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = ({ seriesName = '' }) => (
	<div className='result-item'>
		<Link to={`/video/${seriesName}`}>
			<h4>{seriesName}</h4>
		</Link>
	</div>
);

export default ResultItem;
