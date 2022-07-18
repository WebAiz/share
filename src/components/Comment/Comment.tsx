// @flow
import * as React from 'react';
import styles from './Comment.module.css';
import {Link} from 'react-router-dom';

type Props = {};

export interface IComment {
  postCommentId: number,
  comment: string,
  createdAt: number[],
  postID: number,
  user: {
    id: number,
    name: string,
    surname: string
  }
}

export function Comment(props: any) {
  return (
    <div className={styles.comment}>
      <div className={'row sb'}>
        <div className={styles.username}>Foo Bar</div>
        <div className={styles.date}>12.10.2022</div>
      </div>
      <div className={styles.content}>Post comment</div>
    </div>
  );
};