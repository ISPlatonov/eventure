import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ApiAddress = "http://localhost:8081";

const GetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const checkAuth = () => {
        // Replace this with your actual authentication check logic
        const isAuthenticated = localStorage.getItem("authToken") !== null;
        return isAuthenticated;
    };

    useEffect(() => {
        if (!checkAuth()) {
            navigate("/login");
        } else {
            const token = localStorage.getItem("authToken");
            fetch(ApiAddress + "/api/users/all", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => res.json())
                .then((data) => setUsers(data))
                .catch((err) => console.error(err));
        }
    }, [navigate]);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export { GetAllUsers };