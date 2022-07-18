// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './Article.module.css';
import {ArticleService} from '../../api/Article';

type Props = {};

export function Article(props) {
  return (
    <div className={styles.article} >
      <div className={styles.title}>Filename</div>
      <div className={styles.content}>t is a long established fact that a reader
        will be distracted by the readable content of a page when looking at its
        layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum' will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </div>
      <div className={styles.size}>12&nbsp;kb</div>
      <a href="" target={'_blank'}>{}</a>
    </div>
  );
};