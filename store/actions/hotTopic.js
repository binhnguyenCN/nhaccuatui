// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchHotTopic = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_HOT_TOPIC,
  payload: data,
});
export default { fetchHotTopic };
