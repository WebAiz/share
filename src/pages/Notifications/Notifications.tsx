// @flow
import * as React from 'react';
import styles from './Notifications.module.css'
import {Link} from 'react-router-dom';
import {zooms} from '../Zoom/Zoom';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {

};

export function Notifications(props: Props) {
  return (
    <div className={styles.notifications}>
      <div className={styles.title}>Notifications</div>
      {zooms.map((el, i) => (
         <div key={i} className={styles.notification}>
           <div>
             <div className={styles.meetingName}>{el.name}</div>
             <Link to={el.url}>{el.url}</Link>
           </div>
           <DeleteIcon className={styles.delete}/>
         </div>
      ))}
    </div>
  );
};