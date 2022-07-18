// @flow
import * as React from 'react';
import styles from './Post.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from 'react';
import {ImageService} from '../../api/Image';
import {PostService} from '../../api/Post';

type Props = {
  isEditable?: boolean,
  setCommentList: any,
  data: PostData,
  getPosts: any
};

interface PostData {
  id: number,
  hashtags: string[],
  title: string,
  createdAt: number[],
  postContent: string,
  postLikes: number,
  postComments: any,
  user: {
    name: string,
    surname: string,
    id: number
  }
}

export function Post({
                       isEditable = false,
                       getPosts,
                       setCommentList,
                     }: Props) {
  // const [likes, setLikes] = useState(data.postLikes);
  // const [image, setImage] = useState('/images/ava.png');
  // const [isLiked, setIsLiked] = useState(0);
  // const imageService = new ImageService();
  // const postService = new PostService();
  // const deletePost = async () => {
  //   await postService.deletePost(data.id);
  //   window.location.reload();
  // };
  //
  // async function getIfLiked() {
  //   const res = await postService.getIfPostLiked(data.id);
  //   setIsLiked(res);
  // }
  //
  // async function getImage() {
  //   const url = await imageService.getImageById(data.user.id);
  //   setImage(url);
  // }
  //
  // async function getPostLikes() {
  //   const res = await postService.getLikes(data.id);
  //   setLikes(res);
  // }
  //
  // const handleLikeClick = async () => {
  //   if (!isLiked) {
  //     await postService.postLike(data.id);
  //   } else {
  //     await postService.deleteLike(data.id);
  //   }
  //   await getIfLiked();
  //   await getPostLikes();
  // };
  //
  // useEffect(() => {
  //   getImage();
  //   getIfLiked();
  // }, []);
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={'row'}>
          <img className={styles.avatar} src={'/images/avatar.png'} alt="avatar"
               height={50} width={50}/>
          <div className={'ml-10 col center'}>
            <div
              className={styles.name}>John Doe</div>
            {/*<div className={styles.username}>@webaiz</div>*/}
          </div>
        </div>
        {isEditable &&
            <DeleteIcon className={styles.delete}/>}
      </div>
      <div className={styles.body}>
        <div className={styles.title}>Post title</div>
        <p className={styles.content}>Post content</p>
        <div className={'row sb'}>
          <div className={styles.date}>12.10.2022</div>
          <div className={'font-gray row a-center'}>
            <div className={'icon row a-center mr-10'}
              >
              <ThumbUpIcon
                className={true ? 'font-green' : ''}/>&nbsp;5
            </div>
            <div className={'icon row a-center'}
                 onClick={() => setCommentList({
                   postId: '12',
                   list: [1,1,1,1,1],
                   title: 'good',
                 })}>
              <CommentIcon/>&nbsp;5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};