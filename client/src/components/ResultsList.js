import React from 'react';
import { connect } from 'react-redux';
import ResultItem from './ResultItem';

class ResultsList extends React.Component {
  render() {
    return (
      <div>
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
          <p>There are currently 0 search results.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ anime = [] }) => {
  return {
    anime
  };
};

export default connect(mapStateToProps)(ResultsList);
