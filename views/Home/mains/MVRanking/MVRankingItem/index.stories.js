// libs
import React from 'react';
// layouts
import MVRankingItem from './index';

export default {
  title: 'Pages/Home/main/MVRanking/MVRankingItem',
  component: MVRankingItem,
  parameters: {},
};

const Template = () => {
  <MVRankingItem />;
};

export const PrimaryAlbumItem = Template.bind({});
PrimaryAlbumItem.args = {};
