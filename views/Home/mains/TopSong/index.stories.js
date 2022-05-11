import React from 'react';

import TopSong from '.';
import { topSong } from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/TopSong',
  component: TopSong,
  parameters: { songs: topSong },
};
export const Template = () => <TopSong songs={topSong} />;
