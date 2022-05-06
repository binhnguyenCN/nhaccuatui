// libs
import React from 'react';
// layouts
import {
  bannerList,
  categoryList,
  hotTopic,
  newSong,
  songList,
  songRanking,
  topSong,
  videoList,
} from '../../api/mockApi';
import {
  Albums,
  HotTopic,
  MVRanking,
  MVs,
  NewRelease,
  Slider,
  SongRanking,
  SuggestForYou,
  TopSong,
  WeeklyArtist,
  Songs,
} from './mains';
import styles from './styles.module.scss';

const Home = () => (
  <>
    <Slider banners={bannerList} />
    <div className={styles['content-grid']}>
      {/* Content */}
      {categoryList.map((category) => (
        <Albums albums={category} key={category.key} />
      ))}
      <NewRelease songs={newSong} />
      <MVs videoList={videoList} />
      <Songs songs={songList} />
      <TopSong songs={topSong} />
      <WeeklyArtist artists={topSong} />
      {/* Sidebar */}
      <SongRanking songs={songRanking} />
      <MVRanking mvs={songRanking} />
      <SuggestForYou />
      <HotTopic topics={hotTopic} />
    </div>
  </>
);

export default Home;
