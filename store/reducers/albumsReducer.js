// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  albumList: [],
};

// eslint-disable-next-line default-param-last
const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state };
    }
    case DATA_ACTION_TYPE.FETCH_ALBUM_LIST: {
      return {
        ...state,
        albumList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default albumsReducer;
