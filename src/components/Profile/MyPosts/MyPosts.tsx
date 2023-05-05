import React from 'react';
import { Post } from './Posts';
import s from './MyPosts.module.css';

type Props = {};

export const MyPosts: React.FC<Props> = () => {
  return (
    <div>
      <div>
        My Posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
