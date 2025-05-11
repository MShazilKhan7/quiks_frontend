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
  "title": "Co-Intelligence",
  "author": "Ethan Mollick",
  "subtitle": "Living and Working with AI",
  "rating": "4.3 (2341 ratings)",
  "duration": "32 min",
  "keyIdeas": "15 Key Ideas",
  "isBookmarked": true,
  "format": "Audio & Text",
  "categories": [
    { "name": "Personal Development", "icon": "IoMdStarOutline" },
    { "name": "Artificial Intelligence", "icon": "GiArtificialIntelligence" }
  ],
  "about": "Co-Intelligence (2024) explores the benefits of partnering with generative, language-based artificial intelligence (AI) in education, the workplace, and any area of life you wish to excel in. By harnessing the potential of new AI technology, and better understanding its limitations, you can use AI to significantly enhance your performance and potential.",
  "authorInfo": "Ethan Mollick is an associate professor who teaches innovation and entrepreneurship at the Wharton School of the University of Pennsylvania. A startups expert, Mollick has penned several renowned management papers, as well as authoring the book The Unicorn’s Shadow: Combating the Dangerous Myths that Hold Back Startups."
}
