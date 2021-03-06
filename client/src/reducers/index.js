import { combineReducers } from 'redux';
import authReducer from './authReducer';
import animeReducer from './animeReducer';
import episodeListReducer from './episodeListReducer';

export default combineReducers({
	auth: authReducer,
	animeData: animeReducer,
	episodeListData: episodeListReducer,
});
