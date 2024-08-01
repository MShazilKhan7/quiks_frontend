import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "../components/RootLayout/RootLayout";
import { navigationRoutes } from "./navigationRoutes";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {navigationRoutes.map((menu, index) => {
            return (
              <Route
                index={index === 0}
                path={menu.path}
                element={menu.element}
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
