// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  newSongList: [],
};

// eslint-disable-next-line default-param-last
const newSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_NEW_SONG: {
      return {
        ...state,
        newSongList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default newSongReducer;
