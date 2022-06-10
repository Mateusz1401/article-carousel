import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from 'pages/posts';
import NotFoundPage from 'pages/not-found';
import { Navigation } from 'routes/navigation';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Navigation.posts} element={<PostsPage />} />
      <Route path={Navigation.notFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
