/** @format */

import { useState, useEffect } from 'react';
import PostCard from '../components/cards/PostCard';

export default function Home() {
  useEffect(() => {
    getPostsData();
    getUsersData();
  }, []);

  const [postsData, setPostsData] = useState([]);
  function getPostsData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPostsData(json));
  }

  const [usersData, setUsersData] = useState([]);
  function getUsersData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsersData(json));
  }

  return (
    <>
      {postsData.map((postData, idx) => (
        <PostCard key={idx} postData={postData} usersData={usersData} />
      ))}
    </>
  );
}
