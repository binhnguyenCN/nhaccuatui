import React from 'react';
import { videoList } from '../../../../api/mockApi';

import MVRanking from './index';

export default {
  title: 'Pages/Home/main/MVRanking',
  component: MVRanking,
  parameters: { mvs: videoList },
};
export const Template = () => <MVRanking mvs={videoList} />;
