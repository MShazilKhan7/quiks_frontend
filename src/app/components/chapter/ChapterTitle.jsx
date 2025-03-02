import React from "react";

const ChapterTitle = ({ text }) => {
  return (
    <div className="pb-6">
      <h3 className="text-3xl text-black font-bold">{text}</h3>
    </div>
  );
};

export default ChapterTitle;
