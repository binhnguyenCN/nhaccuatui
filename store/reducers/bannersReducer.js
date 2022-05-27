// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  bannerList: [],
};

// eslint-disable-next-line default-param-last
const bannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_BANNER_LIST: {
      return {
        ...state,
        bannerList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default bannersReducer;
