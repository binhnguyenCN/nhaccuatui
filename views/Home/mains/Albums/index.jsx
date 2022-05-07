// libs
import React from 'react';
// layouts
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import AlbumItem from './AlbumItem';
import styles from './styles.module.scss';

const Albums = ({ albums }) => {
  const { groupName, listPlaylist } = albums;
  const getTitle = (title, lang = 'vi') => {
    const index = title.indexOf('_');
    if (lang === 'vi') {
      return title.slice(0, index);
    }
    return title.slice(index + 1, -1);
  };
  return (
    <div className={styles['albums-wrapper']}>
      <CategoryTitle
        title={{ content: getTitle(groupName), url: '/', icon: null }}
      />
      <CategoryList>
        {listPlaylist.map((playlist, index) => {
          if (index < 5) {
            return <AlbumItem key={playlist.key} album={playlist} />;
          }
          return null;
        })}
      </CategoryList>
    </div>
  );
};

export default Albums;
