import Discover from "../components/discover/Discover";
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
    element: <>categories</>,
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
