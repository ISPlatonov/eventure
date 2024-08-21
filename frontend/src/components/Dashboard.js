import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Users from "./Users";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* call java api to retrieve data */}
        <h2>Java API Data</h2>
        <Users />
      </div>
    )
  );
};

export default Profile;