const bookRoutes = [
  {
    path: "/books",
    // element: <BookList />,
    children: [
      {
        path: "",
        element: "",
      },
    ],
  },
  {
    path: "/books/:id",
    // element: <BookDetail />,
  },
];

export default bookRoutes;
