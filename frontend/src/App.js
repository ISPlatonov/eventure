// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import EventCreate from './components/EventCreate';
import EventDetails from './components/EventDetails';
import Profile from './components/Profile';
import Login from "./components/Login";
import Logout from './components/Logout';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
                <Route path="/create-event" element={<ProtectedRoute component={EventCreate} />} />
                <Route path="/event/:id" element={<ProtectedRoute component={EventDetails} />} />
                <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default App;