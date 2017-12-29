import React from 'react';
import { connect } from 'react-redux';
import Iframe from 'react-iframe';

const VideoPlayer = props => (
  <div>
    <Iframe
      url={
        props.animeName.info
          ? props.animeName.info
          : ''
      }
    />
  </div>
);

const mapStateToProps = state => ({ animeName: state.animeName });
export default connect(mapStateToProps)(VideoPlayer);
