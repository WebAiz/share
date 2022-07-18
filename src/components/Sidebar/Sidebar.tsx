// @flow
import * as React from 'react';
import styles from './Sidebar.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import {InfoCard} from '../InfoCard/InfoCard';
import {Link, useLocation} from 'react-router-dom';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SchoolIcon from '@mui/icons-material/School';

type Props = {};

export function Sidebar(props: Props) {
  const location = useLocation();
  const handleIsActive = (linkName) => {
    if (location.pathname.includes(linkName)) {
      return styles.linkActive;
    } else {
      return styles.link;
    }
  };

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.header}>SHARE</h2>
      <ul className={styles.list}>
        <Link to={'/news'} className={handleIsActive('news')}>
          <RssFeedIcon className={styles.icon}/>
          <span>News</span>
        </Link>
        <Link to={'/articles'} className={handleIsActive('articles')}>
          <ArticleIcon className={styles.icon}/>
          <span>Articles</span>
        </Link>
        <Link to={'/zoom'} className={handleIsActive('zoom')}>
          <VideoCallIcon className={styles.icon}/>
          <span>Zoom</span>
        </Link>
        <Link to={'/courses'} className={handleIsActive('courses')}>
          <SchoolIcon className={styles.icon}/>
          <span>Courses</span>
        </Link>
      </ul>
      <InfoCard/>
    </div>
  );
}