import { FETCH_ANIME_LIST_SUCCESS, FETCH_ANIME_START } from './../actions/types';

export default function (
	state = {
		loading: false,
	},
	action,
) {
	switch (action.type) {
		case FETCH_ANIME_START:
			return { ...state, loading: true };
		case FETCH_ANIME_LIST_SUCCESS:
			return { ...state, loading: false, animeList: [...action.payload] };
		default:
			return state;
	}
}
