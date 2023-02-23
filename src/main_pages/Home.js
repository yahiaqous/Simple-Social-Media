/** @format */

import { useState, useEffect, useRef } from 'react';

import AddPostButton from '../components/buttons/AddPostButton';
import AddPostDialog from '../components/dialogs/AddPostDialog';
import PostCard from '../components/cards/PostCard';

export default function Home(props) {
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

  const [showAddPostDialog, setShowAddPostDialog] = useState(false);

  // Navigate to the Page End => https://stackoverflow.com/a/45905418
  const divRef = useRef(null);
  function navigateBottom() {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {showAddPostDialog && (
        <AddPostDialog
          showAddPostDialog={showAddPostDialog}
          setShowAddPostDialog={setShowAddPostDialog}
          setPostsData={setPostsData}
          navigateBottom={navigateBottom}
          userDetails={props.userDetails}
        />
      )}

      <AddPostButton
        showAddPostDialog={showAddPostDialog}
        setShowAddPostDialog={setShowAddPostDialog}
      />

      {postsData.map((postData, idx) => (
        <PostCard
          key={idx}
          postData={postData}
          postsData={postsData}
          setPostsData={setPostsData}
          usersData={usersData}
          userDetails={props.userDetails}
        />
      ))}

      <div ref={divRef} />
    </>
  );
}
