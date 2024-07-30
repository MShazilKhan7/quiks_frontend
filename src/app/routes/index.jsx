import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bookRoutes from "./bookNavigationConfig";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {bookRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
