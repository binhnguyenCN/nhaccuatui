// libs
import React from 'react';
// layouts
import WeeklyArtist from '.';
// others
import mockData from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/WeeklyArtist',
  component: WeeklyArtist,
  parameters: { artists: mockData.topSong },
};
export const Template = () => <WeeklyArtist artists={mockData.topSong} />;
