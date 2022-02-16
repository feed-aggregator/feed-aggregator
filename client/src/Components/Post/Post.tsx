import React from 'react';
import './Post.scss';
import { HNPost } from '../../util/types';
import HackerNewsIcon from '../Icons/HackerNewsIcon/HackerNewsIcon';
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
      <HackerNewsIcon size='3em' />
      <h1>{content.score}</h1>
      <div>
        <h2>{content.title}</h2>
        <br />
        <h5>{`Author: ${content.by}`}</h5>
      </div>
    </a>
  );
}
