import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const API_URL = 'http://localhost:8081' + '/api/users/all';

const Users = () => {
    const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } = useAuth0();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!isAuthenticated) {
                await loginWithRedirect();
            } else {
                const token = await getAccessTokenSilently();
                const response = await fetch(API_URL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // 'Access-Control-Allow-Origin': 'https://dev-4a7rm0084f1y7mjy.us.auth0.com, http://localhost:3000, http://localhost:8081',
                    },
                });
                console.log("aboba: " + response);
                const data = await response.json();
                setUsers(data);
            }
        };

        fetchData();
    }, [isAuthenticated, loginWithRedirect, getAccessTokenSilently]);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;