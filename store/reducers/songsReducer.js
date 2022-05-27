// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  songList: [],
};

// eslint-disable-next-line default-param-last
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_SONG_LIST: {
      return {
        ...state,
        songList: action.payload,
      };
    }
    default:
      return state;
  }
};
export default songsReducer;
