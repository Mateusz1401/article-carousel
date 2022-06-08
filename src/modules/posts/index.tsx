import React, { FC, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Loader from '../../components/loader';
import { useAppDispatch } from '../../hooks/redux';
import { getAllPosts } from '../../redux/posts/actions';
import { Post } from '../../redux/posts/types';
import CarouselItem from './components/carousel-item';
import { usePosts } from './hooks/use-posts';
import './index.scss';

const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loadingPosts, activeSlide, handleSlideChange } = usePosts();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const renderPosts = () =>
    posts.map((post: Post) => <CarouselItem key={post.id} post={post} activeSlide={activeSlide} />);

  return (
    <>
      {!loadingPosts ? (
        <Carousel
          selectedItem={activeSlide}
          width="calc(100vw - 60px)"
          onChange={handleSlideChange}
          showIndicators={false}
          showThumbs={false}
        >
          {renderPosts()}
        </Carousel>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Posts;
