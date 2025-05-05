import Discover from "../pages/discover";
import Categories from "../pages/categories";
import CategoryDetail from "../pages/categoryDetail";
import Profile from "../pages/profile";
import BookDetail from "../pages/bookDetail";
import BookRead from "../pages/bookRead";
import Library from "../pages/library";
import DashboardLayout from "../pages/Dashboard";
import Form from "../components/Dashboard/books/Form";
import AuthorForm from "../components/Dashboard/authors/AuthorForm";

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
    element: <Library />,
  },
];

export const dashboardRoutes = [
  {
    path: "dashboard/",
    element: <DashboardLayout />,
    children: [
      {
        path: "books",
        element: <Form />,
      },
      {
        path: "authors",
        element: <AuthorForm />,
      },
    ],
  },
];
export default navigationRoutes;
