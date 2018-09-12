import React from 'react';
import { Link } from 'react-router-dom';

const ResultItem = ({ id = '', seriesName = '' }) => {
  return (
    <div className="result-item">
      <Link to={`/view/${id}`}>
        <h4>{seriesName}</h4>
      </Link>
    </div>
  )
};

export default ResultItem;
