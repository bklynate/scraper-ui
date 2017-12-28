import { combineReducers } from 'redux';
import authReducer from './authReducer';
import animeReducer from './animeReducer';

export default combineReducers({
  auth: authReducer,
  animeName: animeReducer,
});
