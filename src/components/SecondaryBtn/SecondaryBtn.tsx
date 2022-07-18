// @flow
import * as React from 'react';
import styles from './Secondary.module.css';
import {IButton} from '../../types';
import {Button} from '@mui/material';

export function SecondaryBtn({children, onClick}: IButton) {
  return (
    <Button onClick={onClick} className={styles.secondaryBtn}>
      {children}
    </Button>
  );
}