import React from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';



const Feed = () => {
  const feed=useSelector((store)=>store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const response = await axios.get(BASE_URL + "/feed", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach the JWT token in the Authorization header
        },
        withCredentials: true, // Keep this if you are handling cookies as well
      });
      dispatch(addFeed(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=>{
    getFeed();
  },[]);
  return (
    feed&&(
      <div className="flex justify-center my-10">
        <Card user={feed[0]}/>
      </div>
    )
  )
}

export default Feed