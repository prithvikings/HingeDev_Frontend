import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';
import { BASE_URL } from '../utils/constants';

const Card = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>; // Or any fallback UI
  }

  // ✅ Include _id in destructuring
  const { firstName, lastName, photourl, age, gender, about, _id } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          className='rounded-full h-32 w-32 mx-auto mt-4 object-cover object-top'
          src={photourl}
          alt="User"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)} // ✅ _id now exists
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)} // ✅ _id now exists
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
