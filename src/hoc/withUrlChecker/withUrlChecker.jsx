import React from 'react';
import { useMatch } from 'react-router-dom';

export const withUrlChecker = (Component) => {
  const UrlChecker = (props) => {
    const url = useMatch('/profile/:userId');
    return <Component {...props} url={url} />;
  };
  return UrlChecker;
};
