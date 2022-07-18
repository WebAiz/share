import {ReactChild} from 'react';

export interface RequestConfig {
  method?: string;
  body?: string | URLSearchParams;
  headers?: Headers;
}

export type ChartType = {
  name: string,
  close: number,
  open: number,
  high: number,
  low: number
}

export interface IButton {
  children: ReactChild,
  onClick?: any,
  type?: string
};

export interface Login {
  login: string,
  password: string
}

export interface RegisterData {
  email: string;
  name: string,
  surname: string,
  password: string
}

export interface PostData {
  hashtags: string[],
  postContent: string,
  title: string
}

export interface CommentData {
  postContent: string,
  postId: number
}

export interface ArticleData {
  fileName: string,
  fileType: string,
  size: number,
  uuid: number
}

export interface CourseAddPost {
  id: number,
  content: string,
  lessonNumber: string,
  title: string,
  videoLink: string
}

export interface CourseCreateData{
  description: string,
  title: string
}