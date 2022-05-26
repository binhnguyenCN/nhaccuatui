// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchAlbumList = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_ALBUM_LIST,
  payload: data,
});
export default { fetchAlbumList };
