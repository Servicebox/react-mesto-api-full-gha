import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element: Component, loggedIn, ...props }) => {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to='/sign-in' replace />
  );
};

export { ProtectedRoute };