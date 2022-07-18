import {Requests} from './Requests';
import {CommentData, PostData} from '../types';
import {BASE_URL} from './Auth';

export class PostService extends Requests {
  constructor() {
    super(BASE_URL);
  }

  makePost(data: PostData) {
    const path = '/post';
    return this.post(path, data);
  }

  getPost(postID: string) {
    const path = `/post/${postID}`;
    return this.get(path);
  }

  getAllPost() {
    const path = '/post/all';
    return this.get(path);
  }

  getMyPosts() {
    const path = '/post/my-posts';
    return this.get(path);
  }

  deletePost(postID: number) {
    const path = `/post/${postID}`;
    return this.delete(path);
  }

  postComment(data: CommentData) {
    const path = '/post/comment';
    return this.post(path, data);
  }

  getLikes(postId: number) {
    const path = `/post/like/${postId}`;
    return this.get(path);
  }

  postLike(postId: number) {
    const path = `/post/like/${postId}`;
    return this.post(path, null);
  }

  deleteLike(postId: number) {
    const path = `/post/like/${postId}`;
    return this.delete(path);
  }

  postLikedUsers(postId) {
    const path = `/post/like/all-post-liked-users/${postId}`;
    return this.get(path);
  }
  getIfPostLiked(postId){
    const path = `/post/like/isLiked/${postId}`
    return this.get(path);
  }
}