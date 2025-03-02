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
        {/* Redirect authenticated users trying to access login/signup */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />

        {/* Protected routes */}
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

        {/* Fallback for unauthenticated users trying to access any other path */}
        {!user && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
