// libs
import React from 'react';
// layouts
import SongRankingItem from '.';

export default {
  title: 'Pages/Home/main/SongRanking/SongRankingItem',
  component: SongRankingItem,
  argTypes: {
    Index: { type: 'number', defaultValue: 1 },
    Thumbnail: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg'],
      },
    },
  },
};

const Template = ({ Thumbnail, Title, Artists, Index }) => (
  <SongRankingItem
    thumbnail={Thumbnail}
    title={Title}
    artists={Artists}
    index={Index}
  />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'Bởi Vì Anh Là Nắng',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/song/2022/04/12/3/e/6/4/1649748534347_300.jpg',

  Artists: [
    {
      artistId: 42999,
      name: 'Mỹ Duyên',
      shortLink: null,
      imageUrl: null,
    },
    {
      artistId: 379528,
      name: 'lenguyenhuukhanh',
      shortLink: null,
      imageUrl: null,
    },
  ],

  Index: 1,
};
