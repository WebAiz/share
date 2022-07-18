// @flow
import * as React from 'react';
import styles from '../Profile/Profile.module.css';
import {Post} from '../../components/Post/Post';
import {Comment} from '../../components/Comment/Comment';
import {useEffect, useState} from 'react';
import {PostService} from '../../api/Post';
import {SecondaryBtn} from '../../components/SecondaryBtn/SecondaryBtn';
import {AddComment} from '../../components/Forms/AddComment/AddComment';
import {Modal} from '../../components/Modal/Modal';

type Props = {};

export function News(props: Props) {
  const arr = new Array(5).fill(0)
  const [postList, setPostList] = useState([]);
  const [isComment, setIsComment] = useState(false);
  const [commentList, setCommentList] = useState({
    postId: null,
    list: [],
    title: ''
  });
  const postService = new PostService();

  const handleCommentAdd = async () => {
    setIsComment(false);
    const posts = await getPosts();
    const post = posts.find(el => el.id === commentList.postId);
    setCommentList({postId: commentList.postId, list: post.postComments, title: commentList.title});
  };

  async function getPosts() {
    const posts = await postService.getAllPost();
    setPostList(posts);
    return posts;
  }

  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.posts}>
          {arr.map((el, i) => (
            <Post getPosts={getPosts} data={el} setCommentList={setCommentList}
                  key={i}/>
          ))}
        </div>
        <div className={styles.comments}>
          <h2>Comments to {commentList.title}</h2>
          {arr.map((el, i) => (
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
        <AddComment onClose={handleCommentAdd} getPosts={getPosts}
                    postId={commentList.postId}/>
      </Modal>
    </div>
  );
}