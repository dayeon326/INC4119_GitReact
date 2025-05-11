//사진, 이름, 소개글 바꿈
import React from "react";
import meoImage from "../assets/meo2.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={meoImage} alt="프로필" />
      <div className="profile-info">
        <h3>허다연</h3>
        <p>안녕하세요!</p>
        <p>저는 동국대학교 정보통신공학과에서 소프트웨어 개발을 공부하고 있는 학생입니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 