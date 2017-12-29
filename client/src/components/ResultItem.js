import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = ({ id, seriesUrl, seriesName }) => (
  <div>
    {console.log(id, seriesUrl, seriesName)}
    <a href={seriesUrl}>
      <h4>{seriesName}</h4>
    </a>
  </div>
);

export default ResultItem;
