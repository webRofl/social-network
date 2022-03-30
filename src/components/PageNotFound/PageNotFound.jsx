import React from 'react';
import classes from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={classes.errorBlock}>
      <h1>Error | page does not exist</h1>
    </div>
  );
};

export default PageNotFound;
