import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Post from '../../Components/Post/Post';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, [posts]);

  return (
    <div className='Dashboard-container'>
      <NavBar />
      <div className='Posts-container'>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
