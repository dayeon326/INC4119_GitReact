import React from "react";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";
import Favorite from "../components/Favorite"; /*내가 좋아하는 것 항목 추가*/

const AboutPage = () => {
  const skills = ["HTML/CSS", "JavaScript", "React", "Node.js"];
  const things=["카페 탐방", "카공", "음악 감상", "고양이", "카키색", "일본 여행"];/*추가*/

  /*Favorite 추가*/
  return (
    <div className="about-container">
      <h2>자기소개</h2>
      <ProfileCard />
      <SkillsList skills={skills} />
      <Favorite things={things} />
    </div>
  );
};

export default AboutPage; 