// libs
import React from 'react';
// layouts
import Home from './index';
// others
import mockData from '@/api/mockApi';

export default {
  title: 'Pages/HomePage',
  component: Home,
};
export const Primary = () => {
  const {
    bannerList,
    albumList,
    hotTopic,
    newSong,
    songList,
    songRanking,
    topSong,
    videoList,
  } = mockData;
  return (
    <Home
      bannerList={bannerList}
      albumList={albumList}
      hotTopic={hotTopic}
      newSong={newSong}
      songList={songList}
      songRanking={songRanking}
      topSong={topSong}
      videoList={videoList}
    />
  );
};
