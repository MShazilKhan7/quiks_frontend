import ChapterLabel from "../../components/chapter/ChapterLabel";
import ChapterTitle from "../../components/chapter/ChapterTitle";

const Chapter = ({ chapter_no, title, content }) => {
  return (
    <>
      <ChapterLabel
        introduction={false}
        chapterNumber={chapter_no}
        totalChapter={5}
      />
      <ChapterTitle text={title} />
      {content}
      <br />
      <br />
    </>
  );
};

export default Chapter;
