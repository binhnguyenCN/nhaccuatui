import React from 'react';

import TopSong from '.';
import mockData from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/TopSong',
  component: TopSong,
  parameters: { songs: mockData.topSong },
};
export const Template = () => <TopSong songs={mockData.topSong} />;
