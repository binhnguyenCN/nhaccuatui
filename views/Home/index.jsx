import React from 'react';

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
import { Category, MVRanking } from './components';
import { Slider, SongRanking, SuggestForYou, HotTopic } from './mains';

import styles from './styles.module.scss';

const Home = () => (
  <>
    <Slider banners={bannerList} />
    <div className={styles['content-grid']}>
      {/* Content */}
      {categoryList.map((category) => (
        <Category type="album" albums={category} key={category.key} />
      ))}
      <Category type="album-hot" albums={newSong} title="mới phát hành" />
      <Category type="mv" mvs={videoList} title="mv hot" />
      <Category type="song" songs={songList} title="bài hát" />
      <Category type="song-top" songs={topSong} title="top 100" />
      <Category
        type="weekly-artist"
        artists={topSong}
        title="weekly artist chart"
      />
      {/* Sidebar */}
      <SongRanking songs={songRanking} />
      <MVRanking mvs={songRanking} />
      <SuggestForYou />
      <HotTopic topics={hotTopic} />
    </div>
  </>
);

export default Home;
