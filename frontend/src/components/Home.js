// src/components/Home.js
import React, {useEffect, useState} from 'react';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const fetchEvents = async () => {


        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await response.json();
        console.log(data);
        setPosts(data);
    };
    useEffect(() => {
        // set timeout to simulate loading time
        setTimeout(() => {
            console.log("Delayed for 10 second.");

        }, "10000");
        fetchEvents();


    }, []);

    return (
        <div className="container">
            <h1>Welcome to Eventure</h1>
            <p>Your one-stop solution for managing events efficiently.</p>
            <h2>Upcoming Events</h2>
            <ul>
                {posts.map((post) => (
                    <div>
                        <li key={post.id}>{post.id} {post.title}</li>
                        <li key={post.id}>{post.body}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

//fetch request to backend api to get all events...
export default Home;
