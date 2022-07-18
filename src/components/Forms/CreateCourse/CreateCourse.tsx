// @flow
import * as React from 'react';
import styles from './CreateCourse.module.css';
import {useState} from 'react';
import {CourseService} from '../../../api/Course';
import {SecondaryBtn} from '../../SecondaryBtn/SecondaryBtn';

export function CreateCourse({onClose}) {
  const courseService = new CourseService();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const handleSubmit = async () => {
    await courseService.createCourse({
      description, title,
    });
    onClose()
  };
  return (
    <form className={styles.form}>
      <div className={styles.inputField}>
        <label htmlFor="title">title</label>
        <input value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text"
               placeholder={'title'}/>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="description">description</label>
        <input value={description}
               onChange={(e) => setDescription(e.target.value)}
               type="text"
               placeholder={'description'}/>
      </div>
      <SecondaryBtn onClick={handleSubmit}>
        Submit Post
      </SecondaryBtn>
    </form>
  );
};