import React from "react";
import CategoryDetailSingle from "./CategoryBookCard";

export default function CategoryBookCards({books}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
      {books.map((book) => (
        <CategoryDetailSingle key={book.id} book={book} />
      ))}
    </div>
  );
}
