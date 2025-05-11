import React from "react";
import ProjectCard from "../components/ProjectCard";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = ({setCurrentPage}) => {
  const projects = [
    {
      title: "나의 프로젝트1",
      description: "React를 사용하여 만든 계산기 애플리케이션",
      onClick: () => setCurrentPage("calculate"),//계산기 페이지로 이동
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            onClick={project.onClick} // 클릭 시 동작하는 함수
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
