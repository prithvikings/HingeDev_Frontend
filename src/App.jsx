import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import Feed from "./Pages/Feed";
import Connections from "./Pages/Connections";
import Request from "./Pages/Requests";
const App = () => {
  return (
    <>
      <Provider store={appstore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />}>
            <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Request />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
