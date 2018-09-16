import axios from 'axios';
import {
	FETCH_USER,
	FETCH_ANIME_LIST_SUCCESS,
	FETCH_ANIME_EPISODES_SUCCESS,
	FETCH_ANIME_EPISODES_START,
	FETCH_ANIME_LIST_START,
	FETCH_POPULAR_ANIME_LIST_START,
	FETCH_POPULAR_ANIME_LIST_SUCCESS,
} from './types';

export const fetchUser = () => async dispatch => {
	const response = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchAnime = animeName => async dispatch => {
	dispatch({ type: FETCH_ANIME_LIST_START });
	const { data } = await axios.post('/api/scrapeAnime', { animeName });
	dispatch({ type: FETCH_ANIME_LIST_SUCCESS, payload: data });
};

export const fetchAnimeEpisode = animeEpisode => async dispatch => {
	dispatch({ type: FETCH_ANIME_EPISODES_START });
	const { data } = await axios.post('/api/scrapeAnimeEpisode', { animeEpisode });
	dispatch({ type: FETCH_ANIME_EPISODES_SUCCESS, payload: data });
};

export const fetchPopularAnime = () => async dispatch => {
	dispatch({ type: FETCH_POPULAR_ANIME_LIST_START });
	const { data } = await axios.get('/api/popularAnime');
	dispatch({ type: FETCH_POPULAR_ANIME_LIST_SUCCESS, payload: data });
};
