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
// others
import styles from './styles.module.scss';

const Home = ({
  bannerList,
  albumList,
  newSong,
  videoList,
  songList,
  topSong,
  songRanking,
  hotTopic,
}) => (
  <>
    <Slider banners={bannerList} />
    <div className={styles['content-grid']}>
      {albumList.map((album) => (
        <Albums albums={album} key={album.key} />
      ))}
      <NewRelease songs={newSong} />
      <MVs videoList={videoList} />
      <Songs songs={songList} />
      <TopSong songs={topSong} />
      <WeeklyArtist artists={topSong} />
      <SongRanking songs={songRanking.song} />
      <MVRanking mvs={videoList} />
      <SuggestForYou />
      <HotTopic topics={hotTopic} />
    </div>
  </>
);

export default Home;
