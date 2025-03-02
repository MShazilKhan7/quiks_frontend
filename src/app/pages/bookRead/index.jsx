import React, { useState } from "react";
import TextSizeSelector from "../../components/bookRead/TextSizeSelector";
import Chapter from "../../components/bookRead/Chapter";

const BookRead = () => {
  const [textSize, setTextSize] = useState(2);

  return (
    <div className="px-4 py-8 md:px-28 md:py-8">
      <div className="w-full flex justify-end items-baseline gap-3">
        <TextSizeSelector textSize={textSize} setTextSize={setTextSize} />
      </div>
      {chapters.map((chapter, index) => (
          <Chapter key={index} chapter_no={index} title={chapter.title} content={chapter.content} />
      ))}
    </div>
  );
};

export default BookRead;



// Data From Backend
const chapters = [
  {
    title: "Introduction",
    content: "This is the introduction to the book.",
  },
  {
    title: "Chapter 1",
    content: "This is the first chapter of the book.",
  },
  {
    title: "Chapter 2",
    content: "This is the second chapter of the book.",
  },
  {
    title: "Chapter 3",
    content: "This is the third chapter of the book.",
  },
  {
    title: "Chapter 4",
    content: "This is the fourth chapter of the book.",
  },
  {
    title: "Chapter 5",
    content: "This is the fifth chapter of the book.",
  },
];
