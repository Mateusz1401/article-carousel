import React, { FC } from 'react';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';
import { Comment } from '../../../../redux/posts/types';
import { CommentBox, CommentName, CommentEmail, CommentBody } from './styled';

type ComponentProps = {
  comment: Comment;
};

const CommentItem: FC<ComponentProps> = ({ comment }) => (
  <CommentBox>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <CommentName>{comment.name}</CommentName>
      <CommentEmail>{comment.email}</CommentEmail>
    </Box>
    <br />
    <CommentBody
      component={'div'}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.body) }}
    />
    <br />
  </CommentBox>
);

export default CommentItem;
