import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import * as actions from './../actions';

class AnimePage extends React.Component {
  render() {
    return (
      <div>
        {this.props.anime[this.props.match.params.id] === undefined ? (
          <Redirect to="/searchAnime" />
        ) : (
          <h1>
            {this.props.anime[this.props.match.params.id].seriesName}
            {console.log(this.props.anime[this.props.match.params.id].seriesName)}
          </h1>
        )}
        <VideoPlayer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    anime: state.anime,
  };
};

export default connect(mapStateToProps, actions)(AnimePage);
