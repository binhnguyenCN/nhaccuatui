// libs
import React from 'react';
// layouts
import TopSong from '.';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/Home/main/TopSong',
  component: TopSong,
  parameters: { songs: mockData.topSong },
};
export const Template = () => <TopSong songs={mockData.topSong} />;
