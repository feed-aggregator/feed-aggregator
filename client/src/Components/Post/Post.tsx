import React from 'react';
import './Post.scss';
import { HNPost } from '../../util/types';
import { IconContext } from 'react-icons';
import { FaHackerNewsSquare } from 'react-icons/fa';
export default function Post({ content }: { content: HNPost }) {
  return (
    <div className='Post-container'>
      <IconContext.Provider value={{ color: '#FF6600', size: '2em' }}>
        <div>
          <FaHackerNewsSquare />
        </div>
      </IconContext.Provider>
      <h3>{content.score}</h3>
      {JSON.stringify(content)}
    </div>
  );
}
