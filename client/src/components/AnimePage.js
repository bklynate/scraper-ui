import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import * as actions from './../actions';

class AnimePage extends React.Component {
  state = {
    videoSrc: '',
  };

  async componentDidMount() {
    if (this.props.anime[this.props.match.params.id] === undefined) {
      return <Redirect to="/searchAnime" />;
    }
    await this.props.fetchAnimeEpisode(
      this.props.anime[this.props.match.params.id],
    );
  }

  getVideoSrc = (e) => {
    const videoSrc = e.currentTarget.attributes[0].textContent;
    console.log('Here is e ::', e.currentTarget)
    console.log('here is videoSrc ::', videoSrc);
    this.setState(() => ({ videoSrc }));
  }

  render() {
    let keyCount = 0;
    return (
      <div>
        {this.props.anime[this.props.match.params.id] === undefined ? (
          <Redirect to="/searchAnime" />
        ) : (
          <h1>{this.props.anime[this.props.match.params.id].seriesName}</h1>
        )}
        <ul>
          {this.props.episodeList ? (
            this.props.episodeList.map(item => {
              return (
                <div key={(keyCount += 1)} className="chip">
                  <a
                    value={item}
                    onClick={this.getVideoSrc}>{`Episode ${keyCount}`}</a>
                </div>
              );
            })
          ) : (
            <li>Please try searching another anime...</li>
          )}
        </ul>
        <VideoPlayer videoSrc={this.state.videoSrc} />
      </div>
    );
  }
}

const mapStateToProps = ({ anime, episodeList}) => {
  return {
    anime,
    episodeList,
  };
};

export default connect(mapStateToProps, actions)(AnimePage);
