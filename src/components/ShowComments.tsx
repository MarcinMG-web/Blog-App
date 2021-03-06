import React, { useState, useEffect } from 'react';
import { AddComments } from './AddComments';

import { getCommentsById } from '../services/ApiService';

export interface IComment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

interface IProps {
  postId: number;
}

export const ShowComments = ({ postId }: IProps): JSX.Element => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      const dataComments = await getCommentsById(postId);
      setComments(dataComments);
    };

    getComments();
  }, [postId]);

  return (
    <div>
      {comments.map((comment: IComment) => (
        <div className='card-body' key={comment.id}>
          <div className='card-body-userID'>Post id: {postId}</div>
          {/* COMMENT  NAME*/}
          <b>Name: {comment.name}</b>
          <br />
          <br />

          {/* COMMENT BODY*/}
          <p className='card-body'>
            <i>Body: {comment.body} </i>
          </p>

          {/* COMMENT  EMAIL*/}
          <div className='card-body-postID'>Email:{comment.email} </div>
          <br />
        </div>
      ))}

      {postId ? (
        <AddComments
          postId={postId}
          comments={comments}
          setComments={setComments}
        />
      ) : null}
    </div>
  );
};
