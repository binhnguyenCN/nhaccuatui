// libs
import React from 'react';
// layouts
import NewRelease from '.';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/Home/main/NewRelease',
  component: NewRelease,
  parameters: { songs: mockData.newSong },
};
export const Template = () => <NewRelease songs={mockData.newSong} />;
