import React from 'react';

import WeeklyArtist from '.';
import { topSong } from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/WeeklyArtist',
  component: WeeklyArtist,
  parameters: { artists: topSong },
};
export const Template = () => <WeeklyArtist artists={topSong} />;
