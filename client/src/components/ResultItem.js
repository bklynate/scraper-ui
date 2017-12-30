import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = ({ id, seriesUrl, seriesName }) => (
  <div>
    {console.log(id, seriesUrl, seriesName)}
    <Link to={`/view/${id}`}>
      <h4>{seriesName}</h4>
    </Link>
  </div>
);

export default ResultItem;
