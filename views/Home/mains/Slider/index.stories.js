import React from 'react';
import mockData from '../../../../api/mockApi';

import Slider from './index';

export default {
  title: 'Pages/Home/main/Slider',
  component: Slider,
  parameters: { banners: mockData.bannerList },
};
export const Template = () => <Slider banners={mockData.bannerList} />;
