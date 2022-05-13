// libs
import React from 'react';
// layouts
import TopicItem from './index';

export default {
  title: 'Pages/Home/main/HotTopic/TopicItem',
  component: TopicItem,
};

const Template = ({ coverImageURL, thumbURL, key }) => {
  <TopicItem coverImageURL={coverImageURL} thumbURL={thumbURL} key={key} />;
};

export const PrimaryAlbumItem = Template.bind({});
PrimaryAlbumItem.args = {
  key: 'wraadpkon',
  coverImageURL:
    'https://avatar-ex-swe.nixcdn.com/topic/mobile/2020/09/04/5/9/2/a/1599203330765.jpg',
  thumbURL:
    'https://avatar-ex-swe.nixcdn.com/topic/image-1440/2020/09/04/e/3/7/5/1599203331252_640.png',
};
