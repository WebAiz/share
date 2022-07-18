// @flow
import * as React from 'react';
import {SecondaryBtn} from '../../SecondaryBtn/SecondaryBtn';
import {useContext, useState} from 'react';
import styles from '../AddPost/AddPost.module.css';
import {AlertContext} from '../../../hooks/useContext';
import {PostService} from '../../../api/Post';

type Props = {
  onClose: any,
  postId: number,
  getPosts: any
};

export interface CommentData {
  'hashtags': string[],
  'postContent': string,
  'title': string
}

export function AddComment({postId, onClose,getPosts}: Props) {
  const [content, setContent] = useState('');
  const postService = new PostService();
  const handleSubmit = async (e) => {
    postService.postComment({
      postContent: content,
      postId,
    }).then(res => getPosts());
    onClose();
  };
  return (
    <form className={styles.form}>
      <div className={styles.inputField}>
        <label htmlFor="content">content</label>
        <input value={content}
               onChange={(e) => setContent(e.target.value)}
               type="text"
               placeholder={'content'}/>
      </div>
      <SecondaryBtn onClick={handleSubmit}>
        Add Comment
      </SecondaryBtn>
    </form>
  );
};