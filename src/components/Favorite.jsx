//내가 좋아하는 것들 소개
import React from "react";

const Favorite = ({ things }) => {
  return (
    <div className="things">
      <h3>좋아하는 것</h3>
      <ul>
        {things.map((thing, index) => (
          <li key={index}>{thing}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite; 