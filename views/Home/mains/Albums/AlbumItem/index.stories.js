// libs
import React from 'react';
// layouts
import AlbumItem from '.';

export default {
  title: 'Pages/Home/main/Albums/AlbumItem',
  component: AlbumItem,
  argTypes: {
    Title: {
      options: [
        'Đôi Mi Em Đang U Sầu - Đông Nhi, Wowy',
        'Sunkissed - Chillies, Châu Bùi',
        'Still Loving You - Bảo Uyên',
      ],
      control: { type: 'select' },
    },
    Thumbnail: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg'],
      },
    },
  },
};

const Template = ({ Title, Thumbnail }) => (
  <AlbumItem title={Title} thumbnail={Thumbnail} />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  Title: 'V-POP Những Bản Hit Quốc Dân',
  Thumbnail:
    'https://avatar-ex-swe.nixcdn.com/playlist/2022/04/19/9/7/a/5/1650365717216_300.jpg',
};
