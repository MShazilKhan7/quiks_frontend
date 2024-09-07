import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "../components/RootLayout/RootLayout";
import { navigationRoutes } from "./navigationRoutes";
import { UserContext } from "../context/UserContext";
import Login from '../components/Authentication/Login';
import Signup from "../components/Authentication/Signup";

const AppRoutes = () => {
  const { user } = useContext(UserContext); // Properly consume the context

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        {user ? (
          <Route path="/" element={<RootLayout />}>
            {navigationRoutes.map((menu, index) => (
              <Route
                key={index}
                index={index === 0}
                path={menu.path}
                element={menu.element}
              />
            ))}
          </Route>
        ) : (
          // Redirect to login if not authenticated
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        {/* Redirect to '/' if authenticated and if not redirect to '/login'  */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
