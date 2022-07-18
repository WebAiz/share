// @flow
import * as React from 'react';
import {Header} from '../Header/Header';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {Sidebar} from '../Sidebar/Sidebar';
import styles from './Layout.module.css';
import {useContext, useEffect} from 'react';
import {UserService} from '../../api/User';
import {UserContext} from '../../hooks/useContext';

type Props = {};

export function Layout(props: Props) {
  const [_, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const userService = new UserService();

  async function getUser() {
    const res = await userService.getUserInfo();
    // const res2 = await userService.getUserProfile();
    setUser((state) => ({...state, ...res}));
  }

  // useEffect(() => {
  //   if (!sessionStorage.getItem('access_token')) {
  //     navigate('/login');
  //   }
  // }, []);
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <div className={styles.layout}>
      <Sidebar/>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
};