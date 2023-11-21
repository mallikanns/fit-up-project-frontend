import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router';
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const auth = useAuth();
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/' />
    }

    return children;
};

export default ProtectedRoute;