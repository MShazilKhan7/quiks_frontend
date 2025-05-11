import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import RootLayout from "../components/RootLayout/RootLayout";
import ProtectedRoute from "../components/Authentication/ProtectedRoute";
import { dashboardRoutes, navigationRoutes } from "./navigationRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routing can be implemented here */}
      <Route
        path="/"
        element={
          <RootLayout />
        }
      >
        {navigationRoutes.map((menu, index) => (
          <Route
            key={index}
            index={index === 0}
            path={menu.path}
            element={menu.element}
          />
        ))}

      </Route>
        {dashboardRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((menu, childIndex) => (
                <Route
                  key={childIndex}
                  index={childIndex === 0}
                  path={menu.path}
                  element={menu.element}
                />
              ))}
          </Route>
        ))}
    </Routes>
  );
};

export default Router;
