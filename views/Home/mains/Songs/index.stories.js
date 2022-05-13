import React from 'react';
import mockData from '../../../../api/mockApi';

import Song from './index';

export default {
  title: 'Pages/Home/main/Songs',
  component: Song,
  parameters: { songs: mockData.songList },
};
export const Template = () => <Song songs={mockData.songList} />;
