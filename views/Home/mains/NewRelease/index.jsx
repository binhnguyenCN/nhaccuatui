// libs
import React, { useEffect, useRef, useState } from 'react';
// layouts
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import Pagination from '../../components/Pagination';
import NewReleaseItem from './NewReleaseItem';
// others
import CategoryTitles from '@/data_source/CategoryTitle';
import styles from './styles.module.scss';
import keyCode from '@/constants/keyCode';
import usePagination from '@/hooks/usePagination';

const NewRelease = ({ songs }) => {
  const [isHover, setIsHover] = useState(false);
  const { pagination, handleChangePage: setPagination } = usePagination(
    1,
    10,
    songs.song?.length || 0,
  );
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // TODO: Handle mouse hover
  const hoverRef = useRef(false);
  useEffect(() => {
    const newReleaseRef = hoverRef.current;
    hoverRef.current.addEventListener('mouseenter', handleMouseEnter);
    hoverRef.current.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      newReleaseRef.removeEventListener('mouseenter', handleMouseEnter);
      newReleaseRef.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverRef, isHover]);

  // TODO: Handle key down (pageUp & pageDown)
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { page } = pagination;
      if (event.keyCode === keyCode.KEY_PAGE_UP) {
        event.preventDefault();
        setPagination(page - 1);
      }
      if (event.keyCode === keyCode.KEY_PAGE_DOWN) {
        event.preventDefault();
        setPagination(page + 1);
      }
      return page;
    };
    if (typeof window === 'object') {
      if (isHover) {
        window.addEventListener('keydown', handleKeyDown);
      } else {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHover, pagination, setPagination]);

  return (
    <article className={styles['album-hot-wrapper']}>
      <div
        className={styles['album-hot-inner']}
        ref={hoverRef}
        id="new-release"
      >
        <CategoryTitle title={CategoryTitles.newRelease} />
        <CategoryList>
          {songs.song &&
            songs.song
              .slice(
                pagination.page * pagination.limit - pagination.limit,
                pagination.page * pagination.limit,
              )
              .map((song) => (
                <NewReleaseItem
                  thumbnail={song.thumbnail}
                  title={song.title}
                  artists={song.artists}
                  duration={song.duration}
                  key={song.key}
                />
              ))}
        </CategoryList>
      </div>
      <Pagination pagination={pagination} onPageChange={setPagination} />
    </article>
  );
};

export default NewRelease;
