import { Dispatch } from '@reduxjs/toolkit';
import apiClient from 'api/api-client';
import { store } from 'store';
import {
  getCommentsDone,
  getPostsDone,
  getPostsFailed,
  getPostsRequest,
} from 'redux/posts/postsSlice';
import { Post, Comment } from 'redux/posts/types';

export const getPostComments = (postId: number) => async (dispatch: Dispatch) => {
  try {
    const response = await apiClient.get<Comment[]>(`posts/${postId}/comments`);
    dispatch(getCommentsDone({ postId, comments: response.data }));
  } catch (e) {
    console.log(`Failed to load comments for post ${postId}`);
  }
};

export const getAllPosts = () => async (dispatch: Dispatch) => {
  dispatch(getPostsRequest());

  try {
    const response = await apiClient.get<Post[]>('/posts');
    dispatch(getPostsDone(response.data));
    store.dispatch(getPostComments(1));
    store.dispatch(getPostComments(2));
    store.dispatch(getPostComments(100));
  } catch (e) {
    dispatch(getPostsFailed('Failed to load posts'));
  }
};

export const getPostIndexById = (postId: number, posts: Post[]) => {
  return posts.findIndex((post: Post) => post.id === postId);
};
