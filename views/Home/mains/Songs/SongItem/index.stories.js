// libs
import React from 'react';
// layouts
import SongItem from '.';

export default {
  title: 'Pages/Home/main/Songs/SongItem',
  component: SongItem,
  argTypes: {
    Thumbnail: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg'],
      },
    },
  },
};

const Template = ({ Thumbnail, Title, Duration, Artists }) => (
  <SongItem
    thumbnail={Thumbnail}
    title={Title}
    duration={Duration}
    artists={Artists}
  />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'Bởi Vì Anh Là Nắng',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/song/2022/04/12/3/e/6/4/1649748534347_300.jpg',
  Duration: '03:53',
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
};
