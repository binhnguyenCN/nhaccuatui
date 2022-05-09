import React from 'react';

import MVs from '.';
import { videoList } from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/MVs',
  component: MVs,
  parameters: { videoList },
};
export const Template = () => <MVs videoList={videoList} />;
