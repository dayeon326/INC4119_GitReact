import React from "react";
import LikeCard from "../components/LikeCard";
import gellImg from "../assets/giselle.jpg";
import giriImg from "../assets/giriboy.jpg";
import haImg from "../assets/hahaha.png";
import iceImg from "../assets/icetea.jpg";
import yoaImg from "../assets/yoagung.jpg";
import toonImg from "../assets/webtoon.webp";
const LikePage = () => {
  const Likes = [
    {
      title: "지젤",
      category: "아이돌",
      description: "핑크머리가 너무 잘 어울려요.",
      image: gellImg,
    },
    {
      title: "기리보이",
      category: "래퍼",
      description: "고등학교 한창 입시할 때부터 많이 들었어요.",
      image: giriImg,
    },
    {
      title: "haha ha",
      category: "유튜버",
      description: "양어장 고양이들 너무 귀여워요.",
      image: haImg,
    },
    {
        title: "아샷추",
        category: "음료",
        description: "신공학관 1층 카페 아샷추 맛있어요.",
        image: iceImg,
    },
    {
        title: "요아정",
        category: "디저트",
        description: "비싸지만 맛있어서 어쩔 수 없이 사먹고 있어요.",
        image: yoaImg,
    },
    {
        title: "똑닮은 딸",
        category: "웹툰",
        description: "가장 좋아하는 네이버 웹툰입니다.",
        image: toonImg,
    },
  ];

  return (
    <div className="projects-container">
      <h2>취향</h2>
      <div className="project-grid">
        {Likes.map((item, index) => (
          <LikeCard
            key={index}
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LikePage;
