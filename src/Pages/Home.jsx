import React from "react";
import NavBar from "../components/NavBar";
import {  Outlet,useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((state)=>state.user);
  const fetchUser = async () => {
    if(userData)return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if(err.response.status===401){
        navigate("/login");
      }
      console.log(err);
    }
  };


useEffect(() => {
    fetchUser();
}, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
