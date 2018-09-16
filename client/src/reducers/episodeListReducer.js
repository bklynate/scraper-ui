import {
  FETCH_ANIME_EPISODES_SUCCESS,
  FETCH_ANIME_EPISODES_START,
} from './../actions/types';

export default function (state = {
  loading: false,
  episodeList: []
}, action) {
  switch (action.type) {
    case FETCH_ANIME_EPISODES_START:
      return {...state, loading: true, episodeList: [] }
    case FETCH_ANIME_EPISODES_SUCCESS:
      return { ...state, loading: false, episodeList: [...action.payload] }
    default:
      return state;
  }
}
