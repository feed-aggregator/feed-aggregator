import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import './Dashboard.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Post from '../../Components/Post/Post';
import * as worker from '../../util/apiWorker';

export default function Dashboard() {
  const [posts, setPosts] = useState<number[]>([]);
  useEffect(() => {
    (async () => {
      const stories = await worker.getPosts();
      // const postDetails = await worker.getPostDetails();
      if (Array.isArray(stories)) setPosts(stories);
    })();
  }, []);

  const renderPosts = () => {};

  return (
    <div className='Dashboard-container'>
      <NavBar />
      <div className='Posts-container'>
        {posts.length &&
          posts.map((post) => {
            return <Post key={post} content={post} />;
          })}
      </div>
    </div>
  );
}
