import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Comment } from 'redux/posts/types';
import {
  CommentBox,
  CommentName,
  CommentEmail,
  CommentBody,
} from 'modules/posts/components/comment-item/styled';

type ComponentProps = {
  comment: Comment;
};

const CommentItem: FC<ComponentProps> = ({ comment }) => (
  <CommentBox>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <CommentName>{comment.name}</CommentName>
      <CommentEmail>{comment.email}</CommentEmail>
    </Box>
    <CommentBody>{comment.body}</CommentBody>
  </CommentBox>
);

export default CommentItem;
