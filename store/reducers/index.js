// libs
import { combineReducers } from 'redux';
// reducers
import albumsReducer from './albumsReducer';
import bannersReducer from './bannersReducer';
import hotTopicReducer from './hotTopicReducer';
import newSongReducer from './newSongReducer';
import songsReducer from './songsReducer';
import songRankingReducer from './songRankingReducer';
import topSongReducer from './topSongReducer';
import videosReducer from './videosReducer';

const rootReducer = combineReducers({
  banners: bannersReducer,
  albums: albumsReducer,
  hotTopic: hotTopicReducer,
  newSong: newSongReducer,
  songs: songsReducer,
  songRanking: songRankingReducer,
  topSong: topSongReducer,
  videos: videosReducer,
});
export default rootReducer;
