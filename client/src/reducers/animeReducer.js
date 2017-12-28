import { FETCH_ANIME} from './../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ANIME:
      return action.payload || false;
    default:
      return state;
  }
}
