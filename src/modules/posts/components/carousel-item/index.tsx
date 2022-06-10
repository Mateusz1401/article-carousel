import React, { FC, memo } from 'react';
import { Comment, Post } from 'redux/posts/types';
import {
  PostBody,
  ItemBoxStyled,
  PostTitle,
  CommentsBox,
} from 'modules/posts/components/carousel-item/styled';
import CommentItem from 'modules/posts/components/comment-item';

type ComponentProps = {
  post: Post;
  activeSlide: number;
};

const CarouselItem: FC<ComponentProps> = ({ post: { title, body, id, comments }, activeSlide }) => (
  <ItemBoxStyled>
    <PostTitle>{`${id}. ${title}`}</PostTitle>
    <PostBody>{body}</PostBody>
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
