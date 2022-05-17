// libs
import React from 'react';
// layouts
import Albums from '.';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/Home/main/Albums',
  component: Albums,
};

export const PrimaryAlbums = () => <Albums albums={mockData.albumList[2]} />;
export const SecondaryAlbums = () => <Albums albums={mockData.albumList[1]} />;
