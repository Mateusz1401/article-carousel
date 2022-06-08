import React, { FC, memo } from 'react';
import DOMPurify from 'dompurify';
import { Comment, Post } from '../../../../redux/posts/types';
import { PostBody, ItemBoxStyled, PostTitle, CommentsBox } from './styled';
import CommentItem from '../comment-item';

type ComponentProps = {
  post: Post;
  activeSlide: number;
};

const CarouselItem: FC<ComponentProps> = ({ post: { title, body, id, comments }, activeSlide }) => (
  <ItemBoxStyled>
    <PostTitle>{`${id}. ${title}`}</PostTitle>
    <br />
    <PostBody component={'div'} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body) }} />
    <br />
    {comments ? (
      <CommentsBox className={activeSlide + 1 === id ? 'fade_in' : ''}>
        {comments?.map((comment: Comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </CommentsBox>
    ) : null}
  </ItemBoxStyled>
);

export default memo(CarouselItem);
