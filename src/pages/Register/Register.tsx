// @flow
import * as React from 'react';
import {useContext, useState} from 'react';
import styles from './Register.module.css';
import {MainButton} from '../../components/MainButton/MainButton';
import {AlertContext} from '../../hooks/useContext';
import {Auth} from '../../api/Auth';
import {Link, useNavigate} from 'react-router-dom';

type Props = {};

export function Register(props: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const service = new Auth();
  const alert = useContext(AlertContext);

  const handleSubmit = async () => {
    navigate('/login');
  };

  return (
    <div className={styles.register}>
      <div className={styles.header}>
        <div className={styles.mainTitle}>Register new User</div>
        {/*<p className={styles.secondaryTitle}>Contrary to popular belief, Lorem*/}
        {/*  Ipsum is not simply random text. It has*/}
        {/*  roots in a piece of classical Latin literature from 45 BC,*/}
        {/*</p>*/}
      </div>
      <form className={styles.form}>
        <div className={styles.formTitle}>Register</div>
        <div className={styles.inputField}>
          <label htmlFor="Email">Email</label>
          <input required onChange={(e) => setEmail(e.target.value)} type="text"
                 placeholder={'Email'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Name">Name</label>
          <input required onChange={(e) => setName(e.target.value)} type="text"
                 placeholder={'Name'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Surname">Surname</label>
          <input required onChange={(e) => setSurname(e.target.value)}
                 type="text"
                 placeholder={'Surname'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Password">Password</label>
          <input required onChange={(e) => setPassword(e.target.value)}
                 type="text"
                 placeholder={'Password'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="PasswordConfirm">Confirm Password</label>
          <input required onChange={(e) => setConfirmPassword(e.target.value)}
                 type="text" placeholder={'Confirm Password'}/>
        </div>
        <MainButton onClick={handleSubmit}>
          SIGN IN
        </MainButton>
        <div className={styles.link}>Already have an account?&nbsp;<Link
          to={'/login'}>Sign in</Link></div>
      </form>
    </div>
  );
}
