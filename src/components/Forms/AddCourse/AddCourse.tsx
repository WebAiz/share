// @flow
import * as React from 'react';
import styles from './AddCourse.module.css';
import {SecondaryBtn} from '../../SecondaryBtn/SecondaryBtn';
import {useState} from 'react';
import {CourseService} from '../../../api/Course';

type Props = {
  id: number
};

export function AddCourse({id, onClose}) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [lessonNumber, setLessonNumber] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const courseService = new CourseService();
  const handleSubmit = async () => {
    await courseService.addCourseById({
      id, content, title, videoLink, lessonNumber,
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
        <label htmlFor="content">content</label>
        <input value={content}
               onChange={(e) => setContent(e.target.value)}
               type="text"
               placeholder={'content'}/>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="lessonNumber">lessonNumber</label>
        <input value={lessonNumber}
               onChange={(e) => setLessonNumber(e.target.value)}
               type="text"
               placeholder={'lessonNumber'}/>
      </div>
      <div className={styles.inputField}>
        <label htmlFor="videoLink">Embed Link</label>
        <input value={videoLink}
               onChange={(e) => setVideoLink(e.target.value)}
               type="text"
               placeholder={'videoLink'}/>
      </div>
      <SecondaryBtn onClick={handleSubmit}>
        Submit Post
      </SecondaryBtn>
    </form>
  );
};