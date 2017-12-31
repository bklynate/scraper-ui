import React from 'react';

import Form from './Form';
import ResultsList from './ResultsList';

const SearchPage = () => (
  <div>
    <h2>Search Anime by their Japanese moniker</h2>
    <ResultsList />
    <Form />
  </div>
);

export default SearchPage;
