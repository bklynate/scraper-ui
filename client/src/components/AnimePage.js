import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import VideoPlayer from './VideoPlayer';
import * as actions from './../actions';

class AnimePage extends React.Component {
  state = {
    videoSrc: '',
    loading: true,
  };

  async componentDidMount() {
    const { id: idx = '' } = this.props.match.params || {};
    const { anime: animeArray = [] } = this.props;
    const animeEpisodeToFetch = animeArray[idx];

    if (animeEpisodeToFetch === undefined)
      return <Redirect to="/searchAnime" />;

    await this.props.fetchAnimeEpisode(animeEpisodeToFetch);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      this.props.episodeList !== nextProps.episodeList ||
      this.state.videoSrc !== nextState.videoSrc
    );
  };

  componentWillReceiveProps = nextProps => {
    const { episodeList: nextEpisodeList } = nextProps;
    const { episodeList: currentEpisodeList } = this.props;
    if (nextEpisodeList !== currentEpisodeList) this.setState({ loading: false });
  };

  getVideoSrc = e => {
    const videoSrc = e.currentTarget.attributes[0].textContent.replace(
      'https://',
      'https://www.',
    );
    this.setState({ videoSrc });
  };

  renderAnimeTitle = () => {
    // this pulls the id/index of the animeTitle the user clicked on
    const { id: idx = '' } = this.props.match.params || {};
    const { anime: animeArray = [] } = this.props;
    const { seriesName = '' } = animeArray[idx];
    return seriesName;
  };

  renderAnimeEpisodeList = () => {
    const { loading } = this.state;
    const { episodeList = [] } = this.props || {};
    if (loading) return <BounceLoader size={60} color={'#EC6F75'} />;
    if (episodeList.length) {
      return episodeList.map((episode, index) => (
        <div key={index} className="chip">
          <a value={episode} onClick={this.getVideoSrc}>
            {`Episode: ${index + 1}`}
          </a>
        </div>
      ));
    }
  };

  render() {
    const { videoSrc } = this.state;
    const { id: idx = '' } = this.props.match.params || {};
    const { anime: animeArray = [] } = this.props;
    const animeEpisode = animeArray[idx];
    return (
      <div>
        {
          animeEpisode === undefined
          ? <Redirect to="/searchAnime" />
          : <h1>{this.renderAnimeTitle()}</h1>
        }

        <div className="animePage-list">
          {this.renderAnimeEpisodeList()}
        </div>
        <VideoPlayer videoSrc={videoSrc} />
      </div>
    );
  }
}

const mapStateToProps = ({ anime, episodeList }) => {
  return {
    anime,
    episodeList,
  };
};

export default connect(mapStateToProps, actions)(AnimePage);
