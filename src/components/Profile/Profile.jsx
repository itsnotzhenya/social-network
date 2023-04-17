import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={s.main}>
      <div>
        <img
        style={{maxWidth: '1000px'}}
        className={s.profile_top_img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="background"
        />
      </div>
      <div className={s.profile_content_wrapper}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4U0lJ-T1fI5y0Oee2mtbC2snM0EP1fhCN-I9kAIdaNjuHqGrG9MLdlAbfBTG8YsxiwI&usqp=CAU"
          alt="avatar"
        />
        <div>Profile Description</div>
        <div className={s.posts}>
          <div>Create new post block</div>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};