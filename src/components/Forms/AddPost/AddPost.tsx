// @flow
import * as React from 'react';
import {SecondaryBtn} from '../../SecondaryBtn/SecondaryBtn';
import {useContext, useState} from 'react';
import styles from './AddPost.module.css';
import {SelectWrapper} from '../../SelectWrapper/SelectWrapper';
import {PostService} from '../../../api/Post';
import {AlertContext} from '../../../hooks/useContext';
import {ALERT_TYPES} from '../../Alerts/Alerts';

type Props = {
  onClose: any
};

export interface PostData {
  'hashtags': string[],
  'postContent': string,
  'title': string
}

export function AddPost({onClose}: Props) {
  const categories = ['book', 'article', 'book', 'article', 'book', 'article'];
  const [category, setCategory] = useState('default');
  const [postContent, setContent] = useState('');
  const [title, setTitle] = useState('');
  const postService = new PostService();
  const setAlert = useContext(AlertContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postService.makePost({hashtags: [category], postContent, title});
    onClose()
  };
  return (
    <form className={styles.form} >
      <div className={styles.inputField}>
        <label htmlFor="title">title</label>
        <input value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text"
               placeholder={'title'}/>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="content">content</label>
        <input value={postContent}
               onChange={(e) => setContent(e.target.value)}
               type="text"
               placeholder={'content'}/>
      </div>
      <SelectWrapper label={'Category'} value={category} data={categories}
                     onClick={setCategory}/>
      <SecondaryBtn onClick={handleSubmit}>
        Submit Post
      </SecondaryBtn>
    </form>
  );
};