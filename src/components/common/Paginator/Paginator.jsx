import React, { useEffect } from 'react';
import classes from './Paginator.module.css';
import { useState } from 'react';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onChangePage,
  portionSize = 15,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );

  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize));
  }, [totalUsersCount, currentPage]);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

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
