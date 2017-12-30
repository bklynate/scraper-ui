import axios from 'axios';
import { FETCH_USER, FETCH_ANIME_LIST, FETCH_ANIME_EPISODE } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchAnime = animeName => async dispatch => {
  const response = await axios.post('/api/scrapeAnime', { animeName });
  dispatch({ type: FETCH_ANIME_LIST, payload: response.data });
};

export const fetchAnimeEpisode = animeEpisode => async dispatch => {
  const response = await axios.post('/api/scrapeAnimeEpisode', { animeEpisode });
  console.log('from fetchAnimeEpisode', response)
  dispatch({ type: FETCH_ANIME_EPISODE, payload: response.data });
};
