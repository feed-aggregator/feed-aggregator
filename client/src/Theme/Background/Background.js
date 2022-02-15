import React from 'react';
import './Background.scss';
const Background = ({ children }) => {
  return <div className={'bg'}>{children}</div>;
};

export default Background;
