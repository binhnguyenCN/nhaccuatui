// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  videoList: [],
};

// eslint-disable-next-line default-param-last
const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_VIDEO_LIST: {
      return {
        ...state,
        videoList: action.payload,
      };
    }
    default:
      return state;
  }
};
export default videosReducer;
