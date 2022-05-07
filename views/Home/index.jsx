// libs
import React from 'react';

// layouts
import {
  Albums,
  HotTopic,
  MVRanking,
  MVs,
  NewRelease,
  Slider,
  SongRanking,
  Songs,
  SuggestForYou,
  TopSong,
  WeeklyArtist,
} from './mains';
import styles from './styles.module.scss';

const Home = ({ data }) => (
  <>
    <Slider banners={data.bannerList} />
    <div className={styles['content-grid']}>
      {data.categoryList.map((category) => (
        <Albums albums={category} key={category.key} />
      ))}
      <NewRelease songs={data.newSong} />
      <MVs videoList={data.videoList} />
      <Songs songs={data.songList} />
      <TopSong songs={data.topSong} />
      <WeeklyArtist artists={data.topSong} />
      <SongRanking songs={data.songRanking} />
      <MVRanking mvs={data.songRanking} />
      <SuggestForYou />
      <HotTopic topics={data.hotTopic} />
    </div>
  </>
);

export default Home;
