// src/components/Profile.js
import React from 'react';

const Profile = () => {
    return (
        <div className="container">
            <h1>User Profile</h1>
            <div className="profile-section">
                <label>Name:</label>
                <div>User Name</div>
            </div>
            <div className="profile-section">
                <label>Email:</label>
                <div>user@example.com</div>
            </div>
            <div className="profile-section">
                <label>Past Events:</label>
                <div>Event 1, Event 2, Event 3</div>
            </div>
            <button className="button">Edit Profile</button>
        </div>
    );
};

export default Profile;
