import React from 'react';
import mockData from '@/api/mockApi';

import MVRanking from './index';

export default {
  title: 'Pages/Home/main/MVRanking',
  component: MVRanking,
  parameters: { mvs: mockData.videoList },
};
export const Template = () => <MVRanking mvs={mockData.videoList} />;
