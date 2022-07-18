// @flow
import * as React from 'react';
import styles from './MainButton.module.css';
import {IButton} from '../../types';
import {Button} from '@mui/material';

export function MainButton({children, onClick}: IButton) {
  return (
    <Button onClick={onClick} className={styles.mainBtn}>{children}</Button>
  );
}