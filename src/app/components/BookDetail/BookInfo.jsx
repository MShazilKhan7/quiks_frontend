  import { useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";

const BookInfo = ({ book }) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div>
      <div className="flex gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary">
          {book.title}
        </h1>
        <div className="py-2">
          {bookmarked ? (
            <BsBookmarkCheckFill
              size={32}
              className="cursor-pointer text-accent"
              onClick={() => setBookmarked(false)}
            />
          ) : (
            <CiBookmark
              size={32}
              className="cursor-pointer"
              onClick={() => setBookmarked(true)}
            />
          )}
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-4 text-gray-800">
        {book.author}
      </h3>
      <h3 className="text-xl mt-4 text-gray-800">{book.subtitle}</h3>
      <hr className="w-full h-[1.5px] bg-[#a8a7a7] mt-4" />
    </div>
  );
};

export default BookInfo;
