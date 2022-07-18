// @flow
import * as React from 'react';
import styles from './InfoCard.module.css';
import HelpIcon from '@mui/icons-material/Help';
import {WhiteButton} from '../WhiteButton/WhiteButton';

type Props = {};

export function InfoCard(props: Props) {
  const handleClick = () => {

  };
  return (
    <div className={styles.infoCard}>
      <HelpIcon className={styles.icon}/>
      <div className={styles.title}>Need help?</div>
      <div className={styles.body}>Please check our docs</div>
      <WhiteButton onClick={handleClick}>
        DOCUMENTATION
      </WhiteButton>
    </div>
  );
};