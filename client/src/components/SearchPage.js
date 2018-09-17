import React from 'react';

import Form from './Form';
import ResultsList from './ResultsList';

const SearchPage = () => (
	<div className='container'>
		<div className='search-container'>
			<h2 className='search-title'>Search Anime by their Japanese moniker</h2>
			<ResultsList />
			<Form />
		</div>
	</div>
);

export default SearchPage;
