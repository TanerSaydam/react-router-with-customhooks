import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import About from './About'
import User from './User'
import Home from './Home'
import Login from './Login'
import useAuth from './useAuth'

export const ThemeContext = React.createContext("light");

function ProtectedRoute({ children }) {
    const { token } = useAuth();
  
    return token ? children : <Navigate to="/login" />;
}


export default function App() {
    const token = useAuth().token;
  
    return (
      
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/user">User</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path='/user' element={<ProtectedRoute><User /></ProtectedRoute>} />
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      
    );
  }
