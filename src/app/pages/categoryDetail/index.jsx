import CategoryBookCards from "../../components/categoryDetail/CategoryBookCards";
import Heading from "../../components/Heading/Heading";
import { BiCategoryAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";

function CategoryDetail() {
  const { category } = useParams();

  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
        <Heading title={category} itemCount={6} icon={<BiCategoryAlt size={24} />}/>
        <CategoryBookCards books={books}/>
    </div>
  )
}

export default CategoryDetail;


// Backend Data
const books = [
  {
    id: 1,
    title: "How I Built This",
    author: "Guy Raz",
    image: "https://images.blinkist.io/images/books/5f802b3b6cee07000646ad41/1_1/470.jpg",
    description: "The Unexpected Paths to Success from the World's Most Inspiring Entrepreneurs",
    duration: "24 min",
    price: 100,
    rating: 4.5,
    reviews: 100,
    isbn: "1234567890",
    publishedDate: "2021-01-01",
  },
  {
    id: 2,
    title: "The Humor Habit",
    author: "Paul Osincup",
    image: "https://images.blinkist.io/images/books/66598ac581aa110007c1ca1e/1_1/470.jpg",
    description: "Rewire Your Brain to Stress Less, Laugh More, enjoy life, and Achieve More'er",
    duration: "18 min",
    price: 200,
    rating: 4.5,
    reviews: 100,
    isbn: "1234567890",
    publishedDate: "2021-01-01",
  },
];