import { combineReducers } from 'redux';
import { postsReducer } from './posts/postsSlice';
import { PostsState } from './posts/types';

export interface ApplicationState {
  posts: PostsState;
}

export default combineReducers<ApplicationState>({
  posts: postsReducer,
});
