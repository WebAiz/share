// @flow
import * as React from 'react';
import {IButton} from '../../types';
import {Button} from '@mui/material';
import styles from './WhiteButton.module.css';

export function WhiteButton({children, onClick}: IButton) {
  return (
    <Button onClick={onClick} className={styles.whiteButton}>
      {children}
    </Button>
  );
}