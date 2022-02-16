import React from 'react';
import './Post.scss';
import { HNPost } from '../../util/types';
import { IconContext } from 'react-icons';
import { FaHackerNewsSquare } from 'react-icons/fa';
export default function Post({ content }: { content: HNPost }) {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl =
    (url: string): (() => void) =>
    () =>
      openInNewTab(url);

  return (
    <a
      className='Post-container'
      onClick={onClickUrl(`https://news.ycombinator.com/item?id=${content.id}`)}
    >
      <IconContext.Provider value={{ color: '#FF6600', size: '2em' }}>
        <div>
          <FaHackerNewsSquare />
        </div>
      </IconContext.Provider>
      <h3>{content.score}</h3>
      <h2>{content.title}</h2>
      {JSON.stringify(content)}
    </a>
  );
}
