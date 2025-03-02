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
    title: "Book 1",
    author: "Author 1",
    image: "https://via.placeholder.com/150",
    description: "Description 1",
    duration: "24 min",
    price: 100,
    rating: 4.5,
    reviews: 100,
    isbn: "1234567890",
    publishedDate: "2021-01-01",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    image: "https://via.placeholder.com/150",
    description: "Description 2",
    duration: "24 min",
    price: 200,
    rating: 4.5,
    reviews: 100,
    isbn: "1234567890",
    publishedDate: "2021-01-01",
  },
  
];