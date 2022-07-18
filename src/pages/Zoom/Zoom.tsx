// @flow
import * as React from 'react';
import styles from './Zoom.module.css';
import {Link} from 'react-router-dom';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

type Props = {};
export const zooms = [
  {
    name: 'Jusan Team',
    url: 'https://zoom.us/j/95845194633?pwd=dk5pZmYvcnU2VjRIUkVldHRISk41Zz09#success',
  },
  {
    name: 'Jusan Invest',
    url: 'https://zoom.us/j/95845194633?pwd=dk5pZmYvcnU2VjRIUkVldHRISk41Zz09#success',
  },
  {
    name: 'Jusan Singularity',
    url: 'https://zoom.us/j/95845194633?pwd=dk5pZmYvcnU2VjRIUkVldHRISk41Zz09#success',
  },
];

export function Zoom(props: Props) {
  return (
    <div className={styles.zoom}>
      <div className={styles.title}>Zoom list</div>
      <div className={styles.list}>
        {zooms.map((el, i) => (
          <div className={styles.meeting} key={i}>
            <div className={styles.meetingName}>{el.name}</div>
            <Link to={el.url}><VideocamOutlinedIcon
              className={styles.icon}/>&nbsp;{el.url}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};