// libs
import React from 'react';
// layouts
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import AlbumItem from './AlbumItem';
// others
import styles from './styles.module.scss';
import { useLocale } from '@/context/LocaleContext';

const Albums = ({ albums }) => {
  const { groupName, listPlaylist } = albums;
  const { locale } = useLocale();

  const getTitle = (title, lang = 'vi') => {
    const index = title.indexOf('_');
    if (lang === 'vi') {
      return title.slice(0, index);
    }
    return title.slice(index + 1, -1);
  };

  return (
    <div className={styles['albums-wrapper']}>
      <div className={styles['albums-inner']}>
        <CategoryTitle
          title={{
            content: getTitle(groupName, locale),
            url: '/',
            icon: null,
          }}
        />
        <CategoryList>
          {listPlaylist.map((playlist, index) => {
            if (index < 5) {
              return (
                <AlbumItem
                  key={playlist.key}
                  title={playlist.title}
                  thumbnail={playlist.thumbnail}
                />
              );
            }
            return null;
          })}
        </CategoryList>
      </div>
    </div>
  );
};

export default Albums;
