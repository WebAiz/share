// @flow
import * as React from 'react';
import styles from './Header.module.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import {BeadCrumb} from '../BreadCrumb/BreadCrumb';
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export const logout = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('isUserloggedIn');
  window.location.replace('/login')
};

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <BeadCrumb/>
      <div className={styles.headerIcons}>
        <div onClick={() => navigate('/')} className={styles.avatar}>
          {/*TODO add is user logged on or not*/}
          <PersonRoundedIcon className={styles.icon}/>
          <div>Profile</div>
        </div>
        <NotificationsIcon onClick={() => navigate('/notifications')}
                           className={styles.icon}/>
        <SettingsIcon onClick={() => navigate('/settings')}
                      className={styles.icon}/>
        <div onClick={logout} className={styles.icon}><LogoutIcon/>&nbsp;Logout
        </div>
      </div>
    </header>
  );
};