// libs
import React from 'react';
// layouts
import MVItem from '.';

export default {
  title: 'Pages/Home/main/MVs/MVItem',
  component: MVItem,
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

const Template = ({ Thumbnail, Title, Duration, Artists, Index }) => (
  <MVItem
    thumbnail={Thumbnail}
    title={Title}
    duration={Duration}
    artists={Artists}
    index={Index}
  />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'Anh Lo Cho Em Hết',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/mv/2022/04/22/d/8/1/d/1650617244595_640.jpg',
  Duration: '04:48',
  Artists: [
    {
      artistId: 49674,
      name: 'Đàm Vĩnh Hưng',
      shortLink: 'dam-vinh-hung',
      imageUrl:
        'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/04/19/b/5/c/c/1650363937009_300.jpg',
    },
    {
      artistId: 95713,
      name: 'Ricky Star',
      shortLink: '',
      imageUrl:
        'https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/03/02/2/8/6/4/1614651512512_300.jpg',
    },
  ],
  Index: 1,
};
