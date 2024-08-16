// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { GetAllUsers } from '../services/api';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="dashboard-header">
                <h1>Welcome, User</h1>
                <Link to="/create-event" className="button">Create New Event</Link>
            </div>
            <div className="dashboard-section">
                <h2>Upcoming Events</h2>
                <p>Event 1: Conference on Web Development - Date: 2024-02-15</p>
                <p>Event 2: Tech Networking Meetup - Date: 2024-03-05</p>
            </div>
            <div className="dashboard-section">
                <h2>Your Tasks</h2>
                <div className="task-item">Task 1: Prepare presentation for the conference</div>
                <div className="task-item">Task 2: Coordinate with tech meetup speakers</div>
            </div>
            <div className="dashboard-section">
                <h2>All users</h2>
                <GetAllUsers />
            </div>
        </div>
    );
};

export default Dashboard;
