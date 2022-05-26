// libs
import { HYDRATE } from 'next-redux-wrapper';
// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const initialState = {
  songRankingList: [],
};

// eslint-disable-next-line default-param-last
const songRankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case DATA_ACTION_TYPE.FETCH_SONG_RANKING: {
      return {
        ...state,
        songRankingList: action.payload,
      };
    }
    default:
      return state;
  }
};
export default songRankingReducer;
