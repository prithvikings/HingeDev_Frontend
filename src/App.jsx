import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
const App = () => {
  return (
    <>
      <Provider store={appstore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
