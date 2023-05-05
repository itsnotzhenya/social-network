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
        <Post message="Hey, how are u?" likesCount={1} />
        <Post message="Have a good day" likesCount={5} />
        <Post message="Hi" likesCount={2} />
      </div>
    </div>
  );
};
