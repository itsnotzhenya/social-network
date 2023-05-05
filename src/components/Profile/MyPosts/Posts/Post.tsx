import React from 'react';
import s from './Post.module.css';

type Props = {
  message: string;
  likesCount: number;
};

export const Post: React.FC<Props> = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img
        className={s.avatar}
        src="https://cdn-icons-png.flaticon.com/512/1176/1176433.png"
        alt="avatar"
      />
      {message}
      <div>
        <button>Like</button>
        <span>{likesCount}</span>
      </div>
    </div>
  );
};
