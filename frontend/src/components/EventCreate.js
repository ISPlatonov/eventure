// src/components/EventCreate.js
import React, { useState } from 'react';

const EventCreate = () => {
    const [eventData, setEventData] = useState({
        eventName: '',
        eventDate: '',
        eventLocation: '',
        eventDescription: '',
        eventResponsible: '',
        eventParticipants: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eventData);
        // Add API call to save event data
    };

    return (
        <div className="container">
            <div className="form-header">
                <h1>Create New Event</h1>
            </div>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" id="eventName" name="eventName" value={eventData.eventName} onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="date" id="eventDate" name="eventDate" value={eventData.eventDate} onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="eventLocation">Event Location</label>
                        <input type="text" id="eventLocation" name="eventLocation" value={eventData.eventLocation} onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea id="eventDescription" name="eventDescription" value={eventData.eventDescription} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-field">
                        <label htmlFor="eventResponsible">Event Responsible</label>
                        <select id="eventResponsible" name="eventResponsible" value={eventData.eventResponsible} onChange={handleChange}>
                            <option value="user1">User 1</option>
                            <option value="user2">User 2</option>
                            <option value="user3">User 3</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="eventParticipants">Participants</label>
                        <select id="eventParticipants" name="eventParticipants" multiple value={eventData.eventParticipants} onChange={handleChange}>
                            <option value="participant1">Participant 1</option>
                            <option value="participant2">Participant 2</option>
                            <option value="participant3">Participant 3</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <button type="submit" className="button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventCreate;
