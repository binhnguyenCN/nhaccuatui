// libs
import React, { useCallback, useEffect, useRef, useState } from 'react';
// layouts
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import Pagination from '../../components/Pagination';
import NewReleaseItem from './NewReleaseItem';
// others
import CategoryTitles from '@/data_source/CategoryTitle';
import styles from './styles.module.scss';

const NewRelease = ({ songs }) => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: songs.song.length || 0,
  });
  const [isHover, setIsHover] = useState(false);

  const handleChangePage = useCallback(
    (page) => {
      const { limit, total } = pagination;
      if (page >= 1 && page <= Math.ceil(total / limit))
        setPagination({ ...pagination, page });
    },
    [pagination],
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
      // ? keyCode: up(33) down(34)
      if (event.keyCode === 33) {
        event.preventDefault();
        handleChangePage(page - 1);
      }
      if (event.keyCode === 34) {
        event.preventDefault();
        handleChangePage(page + 1);
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
  }, [isHover, pagination, handleChangePage]);

  return (
    <div className={styles['album-hot-wrapper']}>
      <div className={styles['album-hot-inner']} ref={hoverRef}>
        <CategoryTitle title={CategoryTitles.newRelease} />
        <CategoryList>
          {songs.song
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
      <Pagination pagination={pagination} onPageChange={handleChangePage} />
    </div>
  );
};

export default NewRelease;
