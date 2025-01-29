import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';
import { BASE_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connection);
    const loggedInUserId = useSelector((store) => store.user._id); // Get logged-in user ID

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/connection", {
                withCredentials: true,
            });
            console.log("Fetched Connections:", res.data); // Debugging
            dispatch(addConnection(res.data));
        } catch (err) {
            console.log("Error fetching connections:", err);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    if (!connections) {
        return <div>Loading...</div>;
    }

    if (connections.length === 0) {
        return <div className="flex justify-center items-center">No Connections</div>;
    }

    return (
        <div className="text-center my-10">
            <h1 className="text-bold text-white text-3xl">Connections</h1>

            {connections.map((connection) => {
                // Ensure 'fromUserId' and 'toUserId' are not null or undefined before using them
                const user =
                    (connection.fromUserId && connection.fromUserId._id === loggedInUserId)
                        ? connection.toUserId
                        : connection.fromUserId;

                // Handle the case where 'user' might be null
                if (!user) {
                    return <div key={connection._id} className="text-center">User details missing</div>;
                }

                return (
                    <div key={connection._id} className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
                        <div>
                            <img
                                alt="User Photo"
                                className="w-20 h-20 rounded-full object-cover"
                                src={user.photoUrl || "default.jpg"}
                            />
                        </div>
                        <div className="text-left mx-4">
                            <h2 className="font-bold text-xl">{user.firstName + " " + user.lastName}</h2>
                            {user.age && user.gender && <p>{user.age + ", " + user.gender}</p>}
                            <p>{user.about}</p>
                        </div>
                        <Link to={"/chat/" + user._id}>
                            <button className="btn btn-primary">Chat</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Connections;
