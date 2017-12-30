import { FETCH_ANIME_LIST } from './../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ANIME_LIST:
      return action.payload || false;
    default:
      return state;
  }
}
