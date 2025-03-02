import React from "react";

const ChapterLabel = ({ introduction, chapterNumber, totalChapter }) => {
  return (
    <div className="py-6">
      <h3 className="text-md text-[#6D787E]">
        {introduction
          ? "INTRODUCTION"
          : ` CHAPTER ${chapterNumber} OF ${totalChapter}`}
      </h3>
    </div>
  );
};

export default ChapterLabel;
