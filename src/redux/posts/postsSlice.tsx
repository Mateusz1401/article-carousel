import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { getPostIndexById } from 'redux/posts/actions';
import { Post, PostsState, CommentPayloadDone } from 'redux/posts/types';

export const initialState: PostsState = {
  data: [],
  loading: false,
  errors: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsRequest: (state: PostsState) => {
      state.loading = true;
    },
    getPostsDone: (state: PostsState, { payload }: PayloadAction<Post[]>) => {
      state.loading = false;
      state.data = payload;
    },
    getPostsFailed: (state: PostsState, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.errors = payload;
    },
    getCommentsDone: (
      state: PostsState,
      { payload: { postId, comments } }: PayloadAction<CommentPayloadDone>,
    ) => {
      const foundPostIndex = getPostIndexById(postId, state.data);

      if (foundPostIndex !== -1) {
        state.data[foundPostIndex].comments = comments;
      }
    },
  },
});

export const {
  actions: { getPostsRequest, getPostsDone, getPostsFailed, getCommentsDone },
  reducer: postsReducer,
} = postsSlice;

export const postsSelector = (state: RootState) => state.posts;
