import axios from "axios";
import React from "react";
import { useState } from "react";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handlelogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email: Email, // lowercase 'email'
          password: Password, // lowercase 'password'
        },
        { withCredentials: true }
      );
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
              value={Email}
              placeholder="Email"
              className="input input-bordered outline-none my-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={Password}
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
