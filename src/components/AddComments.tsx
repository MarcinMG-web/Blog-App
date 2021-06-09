import React, { useState, ChangeEvent } from 'react';

import { IComment } from './ShowComments';

import { sendComment } from '../services/ApiService';

interface IProps {
  postId: number;
  comments: any;
  setComments: any;
}

export const AddComments = ({
  postId,
  comments,
  setComments,
}: IProps): JSX.Element => {
  const initialFormComment: IComment = {
    postId: '',
    id: '',
    name: '',
    email: '',
    body: '',
  };

  const [formData, updateFormData] = useState<IComment>(initialFormComment);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  // Send form
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const setComment = async () => {
      const assignDataForm = await sendComment(postId, formData);

      const newComment = comments.slice();
      newComment.push(assignDataForm);
      setComments(newComment);
    };

    setComment();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor='exampleFormControlTextarea1' className='form-lable'>
        Your Comet:
      </label>

      <input
        type={'text'}
        className={'form-control'}
        name={'name'}
        placeholder={'Name:'}
        onChange={handleChange}
      />

      <textarea
        className='form-control'
        name={'body'}
        placeholder='Comment body:'
        rows={3}
        onChange={handleChange}
      />

      <input
        type={'email'}
        className={'form-control'}
        name={'email'}
        placeholder={'Email:'}
        onChange={handleChange}
      />

      <input
        type={'submit'}
        value={'Add Comment'}
        className='btn btn-success'
      />
    </form>
  );
};
