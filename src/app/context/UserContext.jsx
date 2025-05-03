import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        try {
            // Check localStorage on initial load
            const storedUser = localStorage.getItem('user');
            const storedToken = localStorage.getItem('token');
            
            if (storedUser && storedToken) {
                const parsedUser = JSON.parse(storedUser);
                console.log('Initializing user context:', parsedUser);
                setUser(parsedUser);
                setToken(storedToken);
            }
        } catch (error) {
            console.error('Error initializing user context:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = (userData, authToken) => {
        try {
            console.log('Logging in user:', userData);
            setUser(userData);
            setToken(authToken);
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', authToken);
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    };

    const logout = () => {
        try {
            console.log('Logging out user');
            if (location.pathname === '/profile') {
                Navigate('/');
            }
            setUser(null);
            setToken(null);
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        } catch (error) {
            console.error('Error during logout:', error);
            throw error;
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={{ user, token, login, logout, setUser, setToken }}>
            {children}
        </UserContext.Provider>
    );
};
