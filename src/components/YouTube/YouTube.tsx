// @flow
import * as React from 'react';
import styles from './YouTube.module.css'

type Props = {
  url: any
};

export function YouTube() {
  return (
    <div className={styles.youtube}>
      <iframe
        width="853"
        height="480"
        src={'https://www.youtube.com/embed/-1h8HQ6rd5U'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
