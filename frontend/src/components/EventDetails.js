// src/components/EventDetails.js
import React from 'react';

const EventDetails = () => {
    return (
        <div className="container">
            <div className="event-header">
                <h1>Event Details</h1>
            </div>
            <div className="event-section">
                <div className="event-info">
                    <label>Event Name:</label>
                    <div>Conference on Web Development</div>
                </div>
                <div className="event-info">
                    <label>Event Date:</label>
                    <div>2024-02-15</div>
                </div>
                <div className="event-info">
                    <label>Location:</label>
                    <div>Techville Convention Center</div>
                </div>
                <div className="event-info">
                    <label>Description:</label>
                    <div>This conference will cover various aspects of web development...</div>
                </div>
                <div className="event-info">
                    <label>Event Responsible:</label>
                    <div>User 2</div>
                </div>
                <div className="event-info">
                    <label>Participants:</label>
                    <div>John Doe, Jane Smith, Alex Johnson</div>
                </div>
                <div className="event-info">
                    <button className="button">Edit Event</button>
                    <button className="button">Delete Event</button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
