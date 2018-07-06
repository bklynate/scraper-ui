import React from 'react';
import { connect } from 'react-redux';
import ResultItem from './ResultItem';

class ResultsList extends React.Component {
  render() {
    return (
      <div className="results-list">
        {this.props.anime.length ? (
          this.props.anime.map(({ seriesName, seriesUrl }, index) => (
            <ResultItem
              key={index}
              id={index}
              seriesName={seriesName}
              seriesUrl={seriesUrl}
            />
          ))
        ) : (
          <p className="no-items">There are currently 0 search results.</p>
        )}
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
