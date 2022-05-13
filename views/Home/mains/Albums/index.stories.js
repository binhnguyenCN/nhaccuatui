// libs
import React from 'react';
// layouts
import Albums from '.';
// others
import mockData from '../../../../api/mockApi';

export default {
  title: 'Pages/Home/main/Albums',
  component: Albums,
  parameters: { albums: mockData.albumList[0] },
};
export const PrimaryAlbums = () => <Albums albums={mockData.albumList[0]} />;
