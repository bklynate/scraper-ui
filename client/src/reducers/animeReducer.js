import {
	FETCH_ANIME_LIST_SUCCESS,
	FETCH_ANIME_LIST_START,
	FETCH_POPULAR_ANIME_LIST_START,
	FETCH_POPULAR_ANIME_LIST_SUCCESS,
} from './../actions/types';

export default function (
	state = {
		loading: false,
		animeList: [],
	},
	action,
) {
	switch (action.type) {
		case FETCH_ANIME_LIST_START:
			return { ...state, loading: true };
		case FETCH_ANIME_LIST_SUCCESS:
			return { ...state, loading: false, animeList: [ ...action.payload ] };
		case FETCH_POPULAR_ANIME_LIST_START:
			return { ...state, loading: true };
		case FETCH_POPULAR_ANIME_LIST_SUCCESS:
			return { ...state, loading: false, popularAnimeList: [ ...action.payload ] };
		default:
			return state;
	}
}
