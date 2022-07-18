// @flow
import * as React from 'react';
import styles from './Login.module.css';
import {MainButton} from '../../components/MainButton/MainButton';
import {useContext, useEffect, useState} from 'react';
import {AlertContext, UserContext} from '../../hooks/useContext';
import {ALERT_TYPES} from '../../components/Alerts/Alerts';
import {Auth} from '../../api/Auth';
import {Link, useNavigate} from 'react-router-dom';

type Props = {};

export function Login(props: Props) {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const service = new Auth();
  const handleSubmit = async () => {
      navigate('/');
  };

  useEffect(() => {

  });
  return (
    <div className={styles.login}>
      <form className={styles.form}>
        <div className={styles.mainTitle}>Welcome Back</div>
        <p className={styles.secondaryTitle}>Enter your login and password to
          sign in</p>
        <div className={styles.inputField}>
          <label htmlFor="Login">Login</label>
          <input value={login}
                 onChange={(e) => setLogin(e.target.value)}
                 type="text" placeholder={'Login'}/>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="Password">Password</label>
          <input value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type="text" placeholder={'Password'}/>
        </div>
        <MainButton onClick={handleSubmit}>
          SIGN IN
        </MainButton>
        <div className={styles.link}>Don't have an account?&nbsp;<Link to={'/register'}>Sign up</Link></div>
      </form>
      <div className={styles.img}>
        <img src="/images/form.png" alt="form"/>
        <h1 className={styles.imgTitle}>Share</h1>
      </div>
    </div>
  );
};