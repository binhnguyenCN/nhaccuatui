// libs
import React from 'react';
// layouts
import NewReleaseItem from '.';

export default {
  title: 'Pages/Home/main/NewRelease/NewReleaseItem',
  component: NewReleaseItem,
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
  <NewReleaseItem
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
