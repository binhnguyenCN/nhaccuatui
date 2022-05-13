import React from 'react';

import MVs from '.';
import mockData from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/MVs',
  component: MVs,
  parameters: { videoList: mockData.videoList },
};
export const Template = () => <MVs videoList={mockData.videoList} />;
