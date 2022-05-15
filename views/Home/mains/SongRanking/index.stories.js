// libs
import React from 'react';
// layouts
import SongRanking from './index';
// others
import mockData from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/SongRanking',
  component: SongRanking,
  parameters: { songs: mockData.songRanking.song },
};
export const Template = () => <SongRanking songs={mockData.songRanking.song} />;
