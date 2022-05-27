// constants
import { DATA_ACTION_TYPE } from '@/constants/actionType';

const fetchBannerList = (data) => ({
  type: DATA_ACTION_TYPE.FETCH_BANNER_LIST,
  payload: data,
});
export default { fetchBannerList };
