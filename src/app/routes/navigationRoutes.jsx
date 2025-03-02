import Discover from "../pages/discover";
import Categories from "../pages/categories";
import CategoryDetail from "../pages/categoryDetail";
import Profile from "../pages/profile";
import BookDetail from "../pages/bookDetail";
import BookRead from "../pages/bookRead";
import Library from "../pages/library";


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
    element: <Categories />,
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
    element: <BookDetail />,
  },
  {
    path: "books/:bookId/read",
    element: <BookRead />,
  },
  {
    path: "/library",
    element: <Library />
  }
];

export default navigationRoutes;
