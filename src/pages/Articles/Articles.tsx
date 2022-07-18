// @flow
import * as React from 'react';
import styles from './Articles.module.css';
import {Article} from '../../components/Article/Article';
import {useEffect, useState} from 'react';
import {ArticleService} from '../../api/Article';
import {PdfViewer} from '../../components/PdfViewer/PdfViewer';

type Props = {};

export function Articles(props: Props) {
  const arr = new Array(5).fill(0)
  const [articleList, setArticleList] = useState([]);
  const [currentArticle, setCurrentArticle] = useState('/files/0.pdf');
  const articleService = new ArticleService();

  function toggleArticle( ) {
    if (currentArticle === '/files/0.pdf') {
      setCurrentArticle('/files/1.pdf');
    } else {
      setCurrentArticle('/files/0.pdf');
    }
  }

  // useEffect(() => {
  //   articleService.getAllArticle().then((res) => setArticleList(res));
  // }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.comments}>
          <h2>Articles</h2>
          <PdfViewer fileUrl={currentArticle}/>
        </div>
        <div className={styles.posts}>
          {arr.map((el, i) => (
            <Article {...el} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};