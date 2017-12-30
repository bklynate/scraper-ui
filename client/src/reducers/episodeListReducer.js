import { FETCH_ANIME_EPISODE } from './../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ANIME_EPISODE:
      return action.payload || false;
    default:
      return state;
  }
}
