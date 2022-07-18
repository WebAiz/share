// @flow
import * as React from 'react';
import styles from './ProfileHeader.module.css';
import {WhiteButton} from '../WhiteButton/WhiteButton';
import GroupsIcon from '@mui/icons-material/Groups';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddCircleOutlineOutlinedIcon
  from '@mui/icons-material/AddCircleOutlineOutlined';
import {Modal} from '../Modal/Modal';
import {useContext, useEffect, useState} from 'react';
import {AddArticle} from '../Forms/AddArticle/AddArticle';
import {AddPost} from '../Forms/AddPost/AddPost';
import {ImageService} from '../../api/Image';
import {UserContext} from '../../hooks/useContext';
import {PostService} from '../../api/Post';

type Props = {};

export function ProfileHeader(props: Props) {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isArticleOpen, setArticleOpen] = useState(false);
  const [image, setImage] = useState('/images/ava.png');
  const [user, setUser] = useContext(UserContext);
  const imageService = new ImageService();
  const closePost = () => {
    setIsPostOpen(false);
  };

  const handleAddPost = () => {
    setIsPostOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    if (user.userId) imageService.getImageById(user.userId).then(res => setImage(res));
  }, [user.userId]);
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Profile</h2>
        <div className={styles.headerBottom}>
          <div className={'row'}>
            <img className={styles.img} src={image} alt="avatar"/>
            <div className={'ml-10'}>
              <p>{user.name} {user.surname}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className={styles.links}>
            <WhiteButton onClick={() => setIsPostOpen(true)}>
              <>
                <AddCircleOutlineOutlinedIcon/>&nbsp;Add Post
              </>
            </WhiteButton>
            <div className={'row a-center cursor hover'}>
              <GroupsIcon/>&nbsp;Collab Teams
            </div>
            <div onClick={() => setArticleOpen(true)}
                 className={'row a-center cursor hover'}>
              <PostAddIcon/>&nbsp;Add article
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={closePost} open={isPostOpen} title={'Add post'}>
        <AddPost onClose={handleAddPost}/>
      </Modal>
      <Modal onClose={() => setArticleOpen(false)} open={isArticleOpen}
             title={'Add Article'}>
        <AddArticle onClose={() => setArticleOpen(false)}/>
      </Modal>
    </>
  );
};