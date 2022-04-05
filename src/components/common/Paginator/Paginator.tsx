import React, { useEffect } from 'react';
import classes from './Paginator.module.css';
import { useState } from 'react';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onChangePage: (pageNumber: number) => void
  portionSize?: number
};

const Paginator: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onChangePage,
  portionSize = 15,
}) => {
  const pagesCount: number = Math.ceil(totalUsersCount / pageSize);

  const pages: number[] = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount: number = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );

  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize));
  }, [totalUsersCount, currentPage]);

  let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber: number = portionNumber * portionSize;

  return (
    <div className={classes.wrapper}>
      {portionNumber > 1 && (
        <button
          className={classes.button}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          ❮
        </button>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              className={`${currentPage === page ? classes.active : null} ${
                classes.pageCount
              }`}
              key={page}
              onClick={() => onChangePage(page)}
            >
              {` ${page} `}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={classes.button}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          ❯
        </button>
      )}
    </div>
  );
};

export default Paginator;
