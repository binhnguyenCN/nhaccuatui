import React from 'react';
import { albumList } from '../../../../api/mockApi';

import Albums from './index';

export default {
  title: 'Pages/Home/main/Albums',
  component: Albums,
  parameters: { albums: albumList[0] },
};
export const Template = () => <Albums albums={albumList[0]} />;
