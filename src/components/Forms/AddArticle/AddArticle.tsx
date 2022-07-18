// @flow
import * as React from 'react';
import styles from './AddArticle.module.css';
import {SecondaryBtn} from '../../SecondaryBtn/SecondaryBtn';
import {useState} from 'react';
import {ArticleService} from '../../../api/Article';

type Props = {
  onClose: any
};

export interface ArticleData {
  title: string,
  formData: FormData
}

export function AddArticle({onClose}: Props) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const articleService = new ArticleService();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    articleService.postArticle({
      title, formData,
    }).then((res) => console.log(res));
    onClose();
  };
  const handleClick = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <label htmlFor="title">Title</label>
        <input value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text"
               placeholder={'title'}/>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="file">
          <div className={styles.btn}>Upload File</div>
        </label>
        <input className={styles.hidden} onChange={(e) => handleClick(e)}
               type="file"
               id={'file'}
               placeholder={'File'}/>
        {file && file.name}
      </div>
      <SecondaryBtn onClick={handleSubmit}>
        Submit Article
      </SecondaryBtn>
    </form>
  );
};