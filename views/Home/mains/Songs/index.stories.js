import React from 'react';
import { songList } from '../../../../api/mockApi';

import Song from './index';

export default {
  title: 'Pages/Home/main/Song',
  component: Song,
  parameters: { songs: songList },
};
export const Template = () => <Song songs={songList} />;
