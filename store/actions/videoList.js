// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchVideoList = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_VIDEO_LIST,
  payload: data,
});
export default { fetchVideoList };
