import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../nav/NavBar"
import Login from "../auth/Login";
import Register from "../auth/Register";
import JobListpage from "../pages/JobListApplicant";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobList" element={<JobListpage />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;