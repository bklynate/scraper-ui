import React from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import ResultItem from './ResultItem';

class ResultsList extends React.Component {
  state = {
    loading: true,
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.anime !== nextProps.anime;
  };

  componentWillReceiveProps = nextProps => {
    const { anime: nextAnimeList } = nextProps;
    const { anime: currentAnimeList } = this.props;
    if (nextAnimeList !== currentAnimeList) this.setState({ loading: false });
  };

  renderResultsList = () => {
    const { loading } = this.state;
    const { anime: animeArray = [] } = this.props || {};
    if (loading)
      return <BeatLoader size={20} margin="20px" color={'#EC6F75'} />;
    if (animeArray.length) {
      return animeArray.map(({ seriesName, seriesUrl }, index) => (
        <ResultItem
          key={index}
          id={index}
          seriesName={seriesName}
          seriesUrl={seriesUrl}
        />
      ));
    }
  };

  render() {
    return (
      <div className="results-list">
        {this.renderResultsList()}
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
