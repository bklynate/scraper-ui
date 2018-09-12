import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import VideoPlayer from './VideoPlayer';
import * as actions from './../actions';

class AnimePage extends Component {
  state = {
    videoSrc: '',
    loading: true,
  };

  async componentDidMount() {
    const { id: idx = '' } = this.props.match.params || {};
    const { animeList = [] } = this.props.data;
    console.log('this is animeList::', animeList);
    const animeEpisodeToFetch = animeList[idx];
    console.log('this is animeEpisodeToFetch::', animeEpisodeToFetch);

    if (animeEpisodeToFetch === undefined)
      return <Redirect to="/searchAnime" />;

    await this.props.fetchAnimeEpisode(animeEpisodeToFetch);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    const { episodeListData: { episodeList: nextEpisodeList = [] } = {} } = nextProps || {}
    const { episodeListData: { episodeList: currentEpisodeList = [] } = {} } = this.props || {}
    return (
      currentEpisodeList !== nextEpisodeList ||
      this.state.videoSrc !== nextState.videoSrc
    );
  };

  componentWillReceiveProps = nextProps => {
    const { episodeListData: { episodeList: nextEpisodeList = [] } = {} } = nextProps || {}
    const { episodeListData: { episodeList: currentEpisodeList = [] } = {} } = this.props || {}
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
    const { animeList = [] } = this.props.data || {};
    const { seriesName = '' } = animeList[idx];
    return seriesName;
  };

  renderAnimeEpisodeList = () => {
    const { loading } = this.state;
    const { episodeListData: { episodeList = [] } = {} } = this.props || {}
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
    const { animeList = [] } = this.props.data;
    const animeEpisode = animeList[idx];
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

const mapStateToProps = ({ animeData: data = {}, episodeListData = {} }) => {
  return {
    data,
    episodeListData,
  };
};

export default connect(mapStateToProps, actions)(AnimePage);
