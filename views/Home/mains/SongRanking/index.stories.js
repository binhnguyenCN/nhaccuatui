import React from 'react';
import { songRanking } from '../../../../api/mockApi';

import SongRanking from './index';

export default {
  title: 'Pages/Home/main/SongRanking',
  component: SongRanking,
  parameters: { songs: songRanking.song },
};
export const Template = () => <SongRanking songs={songRanking.song} />;
