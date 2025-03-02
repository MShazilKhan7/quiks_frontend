import BookImage from "../../components/BookDetail/BookImage";
import BookInfo from "../../components/BookDetail/BookInfo";
import BookStats from "../../components/BookDetail/BookStats";
import CategoryList from "../../components/BookDetail/CategoryList";
import AboutSection from "../../components/BookDetail/About";

const BookDetail = () => {

  return (
    <div className="flex w-full flex-col md:flex-row justify-between py-4 md:px-12 md:py-8">
      <BookImage />
      <div className="details w-full md:w-[68%] px-4 py-4 md:pl-8">
        <BookInfo book={book}/>
        <BookStats book={book}/>
        <hr className="w-full h-[1.5px] bg-[#a8a7a7] mt-4" />
        <CategoryList categories={book.categories} />
        <AboutSection about={book.about} authorInfo={book.authorInfo} />
      </div>
    </div>
  );
};

export default BookDetail;




// Data From Backend
const book = {
  "title": "How to Talk to Anyone",
  "author": "Leil Lowndes",
  "subtitle": "92 Little Tricks for Big Success in Relationships",
  "rating": "4.3 (2341 ratings)",
  "duration": "32 min",
  "keyIdeas": "15 Key Ideas",
  "isBookmarked": true,
  "format": "Audio & Text",
  "categories": [
    { "name": "Personal Development", "icon": "IoMdStarOutline" },
    { "name": "Health", "icon": "GiHealing" }
  ],
  "about": "AI Needs You (2024), explores the transformative power of Artificial Intelligence and the urgent need for public engagement in shaping its future...",
  "authorInfo": "Verity Harding is a prominent figure in the field of AI policy and ethics, recognized as one of TIME's 100 Most Influential People in AI..."
}
