import React from 'react';
import './Post.scss';

export default function Post({ content }: { content: any }) {
  return <div className='Post-container'>{JSON.stringify(content)}</div>;
}
