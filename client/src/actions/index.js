import axios from 'axios';
import { FETCH_USER, FETCH_ANIME } from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchAnime = animeName => async dispatch => {
  const response = await axios.post('/api/scrapeAnime', { animeName });
  console.log('this is fetchAnime', response);
  dispatch({ type: FETCH_ANIME, payload: response.data });
};
