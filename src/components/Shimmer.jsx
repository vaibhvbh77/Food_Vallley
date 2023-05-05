import React from "react";

const Shimmer = () => {
  const arr = new Array(100).fill("");
  return (
    <div>
      Loading....
      <div className="shimmerContainer">
        {arr.map((curr) => (
          <h3 className="shimmer"></h3>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
