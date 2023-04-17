import React from 'react';
import { Post } from './Posts';
import s from './MyPosts.module.css';

export const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div>Create new post block</div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};
