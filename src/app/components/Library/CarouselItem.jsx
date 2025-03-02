// Carousel Item Component
import { Link } from "react-router-dom";
const CarouselItem = ({ resource }) => {
  return (
    <div className="carousel-item text-center relative w-52 h-52 mx-2 pt-2 snap-start hover:bg-greyaccent">
      <Link
        to={`/books/${resource.id}`}
        className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
      >
        <img src={resource.imageUrl || ""} alt={resource.title} className="w-full aspect-square hidden" />
      </Link>
    </div>
  );
};

export default CarouselItem;