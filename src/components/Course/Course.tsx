// @flow
import * as React from 'react';
import styles from './Course.module.css';
import {YouTube} from '../YouTube/YouTube';

export function Course(props) {
  return (
    <div className={styles.course}>
      <div className={styles.header}>
        <div className={styles.lessonNumber}>Lesson #12</div>
        <div className={styles.title}>What is Lorem Ipsum?
        </div>
      </div>

      <YouTube/>
      <a className={styles.videoLink}></a>
      <div className={styles.content}>Contrary to popular belief, Lorem Ipsum is
        not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old.
      </div>
      <div className={styles.date}>12.10.2022</div>
    </div>
  );
};