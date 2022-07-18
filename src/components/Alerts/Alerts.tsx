// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export enum ALERT_TYPES {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
  DEFAULT = 'default'
}

type Props = {
  alert: {
    type: ALERT_TYPES,
    text: string,
  }
}

export function Alerts({alert}: Props) {
  useEffect(() => {
    if (alert.type !== ALERT_TYPES.DEFAULT) {
      toast[alert.type](alert.text, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [alert.text, alert.type]);
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}