// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchTopSong = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_TOP_SONG,
  payload: data,
});
export default { fetchTopSong };
