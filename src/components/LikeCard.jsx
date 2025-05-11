import React from "react";

const LikeCard = ({ title, category, description, image }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <h4 style={{color: "#555", marginTop: "-10px"}}>{category}</h4>
      <p>{description}</p>
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

export default LikeCard;
