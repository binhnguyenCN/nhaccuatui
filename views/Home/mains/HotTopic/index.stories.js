// libs
import React from 'react';
// layouts
import HotTopic from './index';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/Home/main/HotTopic',
  component: HotTopic,
  parameters: { topics: mockData.hotTopic },
};
export const PrimaryHotTopic = () => <HotTopic topics={mockData.hotTopic} />;
