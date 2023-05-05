import React from 'react';
import s from './Post.module.css';

type Props = {};

export const Post: React.FC<Props> = () => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://cdn-icons-png.flaticon.com/512/1176/1176433.png"
        alt="avatar"
      />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
