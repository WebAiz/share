// @flow
import * as React from 'react';
import styles from './Settings.module.css';
import {MainButton} from '../../components/MainButton/MainButton';
import {useContext} from 'react';
import {AlertContext} from '../../hooks/useContext';
import {ALERT_TYPES} from '../../components/Alerts/Alerts';
import {ImageService} from '../../api/Image';

type Props = {};

export function Settings(props: Props) {
  const alert = useContext(AlertContext);
  const imageService = new ImageService();
  const handleSubmit = () => {
    alert({type: ALERT_TYPES.INFO, text: 'INFO'});
  };

  function uploadImage(file) {
    imageService.uploadAvatar(file).then((res) => console.log(res));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };
  return (
    <div className={styles.settings}>
      <div className={styles.mainTitle}>User Settings</div>

      <form className={styles.form}>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImg} height={100} width={100}
               src="/images/avatar.png" alt="avatar"/>
          <label className={styles.avatarWrapper} htmlFor="avatar">
            <div className={styles.btn}>Upload Avatar</div>
          </label>
          <input onChange={handleImageChange} id={'avatar'}
                 className={styles.hidden} type="file"
                 placeholder={'avatar'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Email">Email</label>
          <input disabled type="text" placeholder={'Email'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder={'Name'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Surname">Surname</label>
          <input type="text" placeholder={'Surname'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="Password">Password</label>
          <input type="text" placeholder={'Password'}/>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="PasswordConfirm">Confirm Password</label>
          <input type="text" placeholder={'Confirm Password'}/>
        </div>
        <MainButton onClick={handleSubmit}>
          Submit changes
        </MainButton>
        {/*<div className={styles.link}>Already have an account?&nbsp;<Link to={'/login'}>Sign in</Link></div>*/}
      </form>
    </div>
  );
};