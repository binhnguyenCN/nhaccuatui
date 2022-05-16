// libs
import React from 'react';
// layouts
import TopSongItem from '.';

export default {
  title: 'Pages/Home/main/TopSong/TopSongItem',
  component: TopSongItem,
  argTypes: {
    Thumbnail: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg'],
      },
    },
  },
};

const Template = ({ Title, Thumbnail }) => (
  <TopSongItem title={Title} thumbnail={Thumbnail} />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'Top 100 Blues/Jazz Hay Nhất',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250971140_300.jpg',
};
