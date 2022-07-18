// @flow
import * as React from 'react';
import {Dialog, DialogTitle} from '@mui/material';
import {ReactChild} from 'react';
import styles from './Modal.module.css'

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  children: ReactChild,
  title: string
}
export function Modal(props: SimpleDialogProps) {
  const { onClose, children, open, title } = props;

  return (
    <Dialog className={styles.modal} onClose={onClose} open={open}>
      <DialogTitle className={styles.title}>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};
