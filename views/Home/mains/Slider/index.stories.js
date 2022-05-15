// libs
import React from 'react';
// layouts
import Slider from './index';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/Home/main/Slider',
  component: Slider,
  parameters: { banners: mockData.bannerList },
};
export const Template = () => <Slider banners={mockData.bannerList} />;
