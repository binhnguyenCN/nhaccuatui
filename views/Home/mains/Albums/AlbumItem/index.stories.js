// libs
import React from 'react';
// layouts
import AlbumItem from './index';

export default {
  title: 'Pages/Home/main/Albums/AlbumItem',
  component: AlbumItem,
  parameters: {
    key: 'XhC2UvgmCAsd',
    title: 'V-POP Những Bản Hit Quốc Dân',
    thumbnail:
      'https://avatar-ex-swe.nixcdn.com/playlist/2022/04/19/9/7/a/5/1650365717216_300.jpg',
  },
};

const Template = ({ key, title, thumbnail }) => {
  <AlbumItem key={key} title={title} thumbnail={thumbnail} />;
};

export const PrimaryAlbumItem = Template.bind({});
PrimaryAlbumItem.args = {
  key: 'XhC2UvgmCAsd',
  title: 'V-POP Những Bản Hit Quốc Dân',
  thumbnail:
    'https://avatar-ex-swe.nixcdn.com/playlist/2022/04/19/9/7/a/5/1650365717216_300.jpg',
};
