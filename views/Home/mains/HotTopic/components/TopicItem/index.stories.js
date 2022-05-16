// libs
import React from 'react';
// layouts
import TopicItem from '.';

export default {
  title: 'Pages/Home/main/HotTopic/TopicItem',
  component: TopicItem,
  argTypes: {
    CoverImageURL: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg'],
      },
    },
    ThumbURL: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg'],
      },
    },
  },
};

const Template = ({ CoverImageURL, ThumbURL }) => (
  <TopicItem coverImageURL={CoverImageURL} thumbURL={ThumbURL} />
);

export const PrimaryItem = Template.bind({});
PrimaryItem.args = {
  CoverImageURL:
    'https://avatar-ex-swe.nixcdn.com/topic/mobile/2020/09/04/5/9/2/a/1599203330765.jpg',
  ThumbURL:
    'https://avatar-ex-swe.nixcdn.com/topic/image-1440/2020/09/04/e/3/7/5/1599203331252_640.png',
};
