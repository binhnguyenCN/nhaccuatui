import React from 'react';

import Category from './components/Category';
import HotTopic from './components/HotTopic';
import MVRanking from './components/MV/MVRanking';
import Slider from './components/Slider';
import SongRanking from './components/Song/SongRanking';
import SuggestForYou from './components/SuggestForU';
import TopSong from './components/TopSong';
import WeeklyArtist from './components/WeeklyArtist';

const Home = () => (
  <>
    <Slider />
    <div className="content-grid">
      {/* Content */}
      <Category type="album-list" />
      <Category type="album-list" />
      <Category type="album-list" />
      <Category type="album-hot" />
      <Category type="mv-list" />
      <Category type="song-list" />
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
