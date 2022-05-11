import React from 'react';
import { bannerList } from '../../../../api/mockApi';

import Slider from './index';

export default {
  title: 'Pages/Home/main/Slider',
  component: Slider,
  parameters: { banners: bannerList },
};
export const Template = () => <Slider banners={bannerList} />;
