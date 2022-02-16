import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import './Dashboard.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Post from '../../Components/Post/Post';
import * as worker from '../../util/apiWorker';
import { HNPost } from '../../util/types';

export default function Dashboard() {
  const [posts, setPosts] = useState<HNPost[]>([]);
  console.log(posts[0]);
  useEffect(() => {
    (async () => {
      const stories = await worker.getPosts();
      if (Array.isArray(stories)) setPosts(stories);
    })();
  }, []);

  return (
    <div className='Dashboard-container'>
      <NavBar />
      <div className='Posts-container'>
        {posts.length ? (
          posts.map((post) => {
            return <Post key={post.id} content={post} />;
          })
        ) : (
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
