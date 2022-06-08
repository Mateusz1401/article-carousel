import { Comment } from '@mui/icons-material';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentPayloadDone = {
  postId: number;
  comments: Comment[];
};

export type PostsState = {
  data: Post[];
  loading: boolean;
  errors: string;
};
