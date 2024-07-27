// import React, { useContext } from 'react';
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={
        user ? (
          roles && roles.indexOf(user.role) === -1 ? (
            <Navigate to="/" />
          ) : (
            <Component />
          )
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

