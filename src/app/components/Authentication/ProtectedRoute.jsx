import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user, token } = useContext(UserContext);

  if (!user || !token) {
    // Redirect to login if there's no user or token
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;