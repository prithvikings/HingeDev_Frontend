import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [email, setEmail] = useState("rajiv07@gmail.com");
  const [password, setPassword] = useState("Rajiv@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogin = async () => {
    try {
      const res = await axios.post(
      BASE_URL+"/login",
        {
          email,
          password,
        },
        { withCredentials: true },
        navigate("/")
      );
      dispatch(addUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="input input-bordered outline-none my-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="input input-bordered outline-none  my-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handlelogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
