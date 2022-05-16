// libs
import React from 'react';
// layouts
import WeeklyArtistItem from '.';

export default {
  title: 'Pages/Home/main/WeeklyArtist/WeeklyArtistItem',
  component: WeeklyArtistItem,
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
  <WeeklyArtistItem title={Title} thumbnail={Thumbnail} />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'Top 100 Nhạc Latin Hay Nhất',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/playlist/2021/05/26/b/e/2/9/1622014540231_300.jpg',
};
