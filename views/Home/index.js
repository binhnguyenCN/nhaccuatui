import React from 'react';

import Category from './components/Category';
import HotTopic from './components/HotTopic';
import MVRanking from './components/MVRanking';
import Slider from './components/Slider';
import SongRanking from './components/SongRanking';
import SuggestForYou from './components/SuggestForU';
import TopSong from './components/Category/TopSong';
import WeeklyArtist from './components/Category/WeeklyArtist';
import styles from './styles.module.scss';

const Home = () => (
  <>
    <Slider />
    <div className={styles['content-grid']}>
      {/* Content */}
      <Category type="album" title="điểm sáng nhạc việt" />
      <Category type="album" title="mới cập nhật" />
      <Category type="album" title="hôm nay nghe gì" />
      <Category type="album-hot" title="mới phát hành" />
      <Category type="mv" title="mv hot" />
      <Category type="song" title="bài hát" />
      <TopSong />
      <WeeklyArtist />
      {/* Sidebar */}
      <SongRanking />
      <MVRanking />
      <SuggestForYou />
      <HotTopic />
    </div>
  </>
);

export default Home;
