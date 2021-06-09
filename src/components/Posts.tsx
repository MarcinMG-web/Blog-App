import React, { useState, useEffect } from 'react';
import { getPostsById } from '../services/ApiService';

import { ShowComments } from './ShowComments';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IProps {
  userId: number;
}

export const Posts = ({ userId }: IProps): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(1);

  // Display Comments
  const [display, setDisplay] = React.useState(false);

  useEffect(() => {
    const getPost = async () => {
      const dataPosts = await getPostsById(userId);
      setPosts(dataPosts);
    };

    getPost();
  }, [userId]);

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Changed Page
  const nextPage = (): void => {
    if (currentPage < posts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-outline-secondary'
        value={currentPage}
        onClick={prevPage}
      >
        Prev Page
      </button>
      <button
        type='button'
        className='btn btn-outline-secondary'
        value={currentPage}
        onClick={nextPage}
      >
        Next page
      </button>

      <div>
        {currentPosts.map((post: IPost) => (
          <div className='card-body' key={post.id}>
            <div className='card-body-userID'>User ID: {post.userId}</div>
            {/* POST  TITLE*/}
            <b>Title: {post.title}</b>
            <br />
            <br />

            {/* POST  BODY*/}
            <p className='card-body'>
              <i>Body: {post.body}</i>
            </p>
            {/* POST  id*/}
            <div className='card-body-postID'>Post id: {post.id} </div>
            <br />

            <button
              type='button'
              className='btn btn-warning'
              onClick={() => setDisplay(!display)}
            >
              Show comments
            </button>

            {display && <ShowComments postId={post.id} />}
          </div>
        ))}
      </div>
    </div>
  );
};
