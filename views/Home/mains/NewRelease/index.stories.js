import React from 'react';
import mockData from '../../../../api/mockApi';

import NewRelease from '.';

export default {
  title: 'Pages/Home/main/NewRelease',
  component: NewRelease,
  parameters: { songs: mockData.newSong },
};
export const Template = () => <NewRelease songs={mockData.newSong} />;
