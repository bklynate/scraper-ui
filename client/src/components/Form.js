import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions'

class Form extends Component {
  state = {
    animeName: ''
  }

  onAnimeNameChange = e => {
    const animeName = e.target.value;
    this.setState(() => ({ animeName }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchAnime(this.state.animeName)
  };


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoFocus
            onChange={this.onAnimeNameChange}
            placeholder="Enter the name of an anime"
            value={this.state.animeName}
          />
          <button className="waves-effect waves-light btn red">Search Anime</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Form)
