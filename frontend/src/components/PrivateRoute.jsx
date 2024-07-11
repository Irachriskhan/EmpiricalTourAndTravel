import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ element: Component, roleRequired, ...rest }) => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('accesstoken='))
      ?.split('=')[1];

    const isAuthenticated = !!token;
    const user = token ? jwtDecode(token) : null;
    const userRole = user?.role;

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (roleRequired && userRole !== roleRequired) {
        return <Navigate to="/" />;
    }

    return <Component {...rest} />;
};

export default PrivateRoute;
