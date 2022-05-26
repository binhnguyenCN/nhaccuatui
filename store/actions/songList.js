// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchSongList = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_SONG_LIST,
  payload: data,
});
export default { fetchSongList };
