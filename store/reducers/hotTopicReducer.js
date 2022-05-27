// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  hotTopicList: [],
};

// eslint-disable-next-line default-param-last
const hotTopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_HOT_TOPIC: {
      return {
        ...state,
        hotTopicList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default hotTopicReducer;
