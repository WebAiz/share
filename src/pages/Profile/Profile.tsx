// @flow
import * as React from 'react';
import {ProfileHeader} from '../../components/ProfileHeader/ProfileHeader';
import styles from './Profile.module.css';
import {Post} from '../../components/Post/Post';
import {Comment} from '../../components/Comment/Comment';
import {useEffect, useState} from 'react';
import {PostService} from '../../api/Post';
import {SecondaryBtn} from '../../components/SecondaryBtn/SecondaryBtn';
import {Modal} from '../../components/Modal/Modal';
import {AddComment} from '../../components/Forms/AddComment/AddComment';

type Props = {
  isCurrentUser?: boolean
};

export function Profile({isCurrentUser = false}: Props) {
  const arr = new Array(5).fill(0)
  const [posts, setPosts] = useState([]);
  const [isComment, setIsComment] = useState(false);
  const [commentList, setCommentList] = useState({
    postId: null,
    list: [],
    title: ''
  });
  const postService = new PostService();

  async function getPosts() {
    const posts = await postService.getMyPosts();
    setPosts(posts);
    return posts;
  }

  const handleCommentAdd = async () => {
    setIsComment(false);
    const posts = await getPosts();
    const post = posts.find(el => el.id === commentList.postId);
    setCommentList({postId: commentList.postId, list: post.postComments, title: commentList.title});
  };
  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <div>
      <ProfileHeader/>
      <div className={styles.container}>
        <div className={styles.posts}>
          {arr.map((el, i) => (
            <Post getPosts={getPosts} setCommentList={setCommentList} data={el}
                  isEditable key={i}/>
          ))}
        </div>
        <div className={styles.comments}>
          <h2>Comments to {commentList.title}</h2>
          {commentList.list.map((el, i) => (
            <Comment {...el} key={i}/>
          ))}
          {commentList.postId &&
              <SecondaryBtn onClick={() => setIsComment(true)}>
                  Add Comment
              </SecondaryBtn>}
        </div>
      </div>
      <Modal onClose={() => setIsComment(false)} open={isComment}
             title={'Add Comment'}>
        <AddComment getPosts={getPosts} postId={commentList.postId}
                    onClose={handleCommentAdd}/>
      </Modal>
    </div>
  );
};