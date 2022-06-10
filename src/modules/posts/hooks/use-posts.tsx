import { useState, ReactNode, ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getPostComments } from 'redux/posts/actions';
import { Post } from 'redux/posts/types';

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const { data, loading } = useAppSelector((state) => state.posts);

  const handleSlideChange = (slide: number, item: ReactNode) => {
    if (slide !== activeSlide) {
      const post: Post = (item as ReactElement).props.post;
      setActiveSlide(slide);

      const nextPostCommentsId = post.id + 1 <= 100 ? post.id + 1 : 1;
      const prevPostCommentsId = post.id - 1 !== 0 ? post.id - 1 : 100;
      const foundPostNext = data.find((post: Post) => post.id === nextPostCommentsId);
      const foundPostPrev = data.find((post: Post) => post.id === prevPostCommentsId);

      if (foundPostNext) {
        if (!foundPostNext.comments) dispatch(getPostComments(nextPostCommentsId));
      }

      if (foundPostPrev) {
        if (!foundPostPrev.comments) dispatch(getPostComments(prevPostCommentsId));
      }
    }
  };

  return {
    activeSlide,
    posts: data,
    loadingPosts: loading,
    handleSlideChange,
  };
};
