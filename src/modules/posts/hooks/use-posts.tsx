import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getPostComments } from '../../../redux/posts/actions';
import { Post } from '../../../redux/posts/types';

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const { data, loading } = useAppSelector((state) => state.posts);

  const handleSlideChange = (slide: number) => {
    setActiveSlide(slide);

    const nextPostCommentsId = slide + 2;
    const foundPost = data.find((post: Post) => post.id === nextPostCommentsId);

    if (slide === activeSlide || foundPost?.comments) return;
    dispatch(getPostComments(nextPostCommentsId));
  };

  return {
    activeSlide,
    posts: data,
    loadingPosts: loading,
    handleSlideChange,
  };
};
