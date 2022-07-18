// @flow
import * as React from 'react';
import styles from './Select.module.css';
import {useState} from 'react';
import {MenuItem, Select} from '@mui/material';

type Props = {
  data: any,
  onClick: any,
  value: string,
  label: string
};


export function SelectWrapper({data, onClick, value, label}: Props) {
  const handleChange = (event) => {
    onClick(event.target.value);
  };
  return (
    <div className={styles.inputField}>
      <label htmlFor={label}>{label}</label>
      <Select
        labelId={label}
        id={label}
        value={value}
        onChange={handleChange}
      >
        {data.map((el, i) => (
          <MenuItem key={i} value={el}>{el}</MenuItem>
        ))}

      </Select>
    </div>
  );
};