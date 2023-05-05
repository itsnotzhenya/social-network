import React from 'react';
import { MyPosts } from './MyPosts';
import s from './Profile.module.css';

type Props = {};

export const Profile: React.FC<Props> = () => {
  return (
    <div className={s.profile}>
      <div>
        <img
          style={{ maxWidth: '1000px' }}
          className={s.profile_top_img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="background"
        />
      </div>
      <div className={s.profile_content_wrapper}>
        <img
          className={s.avatar}
          src="https://cdn-icons-png.flaticon.com/512/1176/1176433.png"
          alt="avatar"
        />
        <div>Profile Description</div>
        <MyPosts />
      </div>
    </div>
  );
};
