import Discover from "../components/discover/Discover";
import CategoriesPage from "../components/CategoriesPage/CategoryCards";
import CategoryDetail from "../components/CategoriesPage/CategoryDetail";
import Profile from "../components/Profile";
import BookDetails from "../components/BookDetail/BookDetails";
import BookRead from "../components/BookDetail/BookRead";
import Library from "../components/Library/Library";
export const navigationRoutes = [
  {
    path: "/",
    element: <Discover />,
  },
  {
    path: "search",
    element: <>search</>,
  },
  {
    path: "categories",
    element: <CategoriesPage />,
  },
  {
    path: "categories/:category",
    element: <CategoryDetail />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "settings",
    element: <>Settings</>,
  },
  {
    path: "books/:bookId",
    element: <BookDetails />,
  },
  {
    path: "books/:bookId/read",
    element: <BookRead />,
  },
  {
    path: "/library",
    element: <Library />,
  }
];

export default navigationRoutes;
