// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  topSongList: [],
};

// eslint-disable-next-line default-param-last
const topSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_TOP_SONG: {
      return {
        ...state,
        topSongList: action.payload,
      };
    }
    default:
      return state;
  }
};
export default topSongReducer;
