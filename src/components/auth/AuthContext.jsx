import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const login = async (email, password) => {
        try {
            const reqBody = {
                user_email: email,
                user_password: password,
            }
            const response = await axios.post(
                'https://fit-up-project-backend.onrender.com/users/login',
                reqBody
            )

            if (response.status !== 200)
                throw new Error('Login failed')

            const authorization = response.headers.get('Authorization')
            localStorage.setItem('token', authorization)

            if (!authorization) {
                throw new Error('Login failed')
            }

            const payload = readPayload(authorization)

            setUser(payload)

            return response

        } catch (error) {
            console.error('login auth context error :: ', error)
            return false
        }
    }


    useEffect(() => {
        const tokenWithBearer = localStorage.getItem('token')
        if (tokenWithBearer) {
            const payload = readPayload(tokenWithBearer)
            setUser(payload)
        }
    }, []);

    const readPayload = (jwt) => {
        const authorizationWithoutBearer = jwt.split(' ')
        const token = authorizationWithoutBearer[1]
        const payloadBase64 = token.split('.')[1]
        const decodedPayload = atob(payloadBase64)
        const payload = JSON.parse(decodedPayload)
        return payload;
    }


    useEffect(() => {
        axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext)
}

