import Discover from "../components/discover/Discover";
import CategoriesPage from '../components/CategoriesPage/CategoryCards'
import CategoryDetail from "../components/CategoriesPage/CategoryDetail";

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
    element: <CategoryDetail />
  },
  {
    path: "profile",
    element: <>categories</>,
  },
  {
    path: "settings",
    element: <>categories</>,
  },
];

export default navigationRoutes;
