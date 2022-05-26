// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchNewSong = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_NEW_SONG,
  payload: data,
});
export default { fetchNewSong };
