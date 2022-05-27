// libs
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
// reducers
import albumsReducer from './albumsReducer';
import bannersReducer from './bannersReducer';
import hotTopicReducer from './hotTopicReducer';
import newSongReducer from './newSongReducer';
import songsReducer from './songsReducer';
import songRankingReducer from './songRankingReducer';
import topSongReducer from './topSongReducer';
import videosReducer from './videosReducer';

const combinedReducer = combineReducers({
  banners: bannersReducer,
  albums: albumsReducer,
  hotTopic: hotTopicReducer,
  newSong: newSongReducer,
  songs: songsReducer,
  songRanking: songRankingReducer,
  topSong: topSongReducer,
  videos: videosReducer,
});
const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.banners) nextState.banners = state.banners;
    return nextState;
  }
  return combinedReducer(state, action);
};
export default rootReducer;
