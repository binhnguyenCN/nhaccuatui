// libs
import React from 'react';
// layouts
import MVRankingItem from '.';

export default {
  title: 'Pages/Home/main/MVRanking/MVRankingItem',
  component: MVRankingItem,
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
  <MVRankingItem
    thumbnail={Thumbnail}
    title={Title}
    artists={Artists}
    index={Index}
  />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'Có Em Là Đủ',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/mv/2022/04/15/9/4/a/6/1650017639222_640.jpg',
  Artists: [
    {
      artistId: 97303,
      name: 'Will',
      shortLink: 'will-365',
      imageUrl:
        'https://avatar-ex-swe.nixcdn.com/singer/avatar/2017/12/14/b/1/0/7/1513223438750_300.jpg',
    },
  ],
  Index: 1,
};
