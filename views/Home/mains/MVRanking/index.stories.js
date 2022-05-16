// libs
import React from 'react';
// layouts
import MVRanking from './index';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/Home/main/MVRanking',
  component: MVRanking,
  parameters: { mvs: mockData.videoList },
};
export const Template = () => <MVRanking mvs={mockData.videoList} />;
