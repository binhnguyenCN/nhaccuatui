import React from 'react';
import mockData from '../../../../api/mockApi';

import SongRanking from './index';

export default {
  title: 'Pages/Home/main/SongRanking',
  component: SongRanking,
  parameters: { songs: mockData.songRanking.song },
};
export const Template = () => <SongRanking songs={mockData.songRanking.song} />;
