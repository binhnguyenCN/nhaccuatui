import React from 'react';
import { newSong } from '../../../../api/mockApi';

import NewRelease from './index';

export default {
  title: 'Pages/Home/main/NewRelease',
  component: NewRelease,
  parameters: { songs: newSong },
};
export const Template = () => <NewRelease songs={newSong} />;
