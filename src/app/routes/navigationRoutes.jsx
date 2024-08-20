import Discover from "../components/discover/Discover";
import CategoriesPage from '../components/CategoriesPage/CategoryCards'
import CategoryDetail from "../components/CategoriesPage/CategoryDetail";
import Profile from "../components/Profile";

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
    element: <Profile />,
  },
  {
    path: "settings",
    element: <>Settings</>,
  },
];

export default navigationRoutes;
