// libs
import React from 'react';
// layouts
import Song from './index';
// others
import mockData from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/Songs',
  component: Song,
  parameters: { songs: mockData.songList },
};
export const Template = () => <Song songs={mockData.songList} />;
