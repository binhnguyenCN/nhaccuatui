// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchSongRanking = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_SONG_RANKING,
  payload: data,
});
export default { fetchSongRanking };
