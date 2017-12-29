import React from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';

const VideoPlayer = props => (
  <div>
    <Iframe
      url={
        props.anime.info
          ? props.anime.info
          : ''
      }
    />
  </div>
);

const mapStateToProps = state => ({ anime: state.anime });
export default connect(mapStateToProps)(VideoPlayer);
