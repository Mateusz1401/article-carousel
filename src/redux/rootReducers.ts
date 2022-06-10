import { combineReducers } from 'redux';
import { postsReducer } from 'redux/posts/postsSlice';
import { PostsState } from 'redux/posts/types';

export interface ApplicationState {
  posts: PostsState;
}

export default combineReducers<ApplicationState>({
  posts: postsReducer,
});
