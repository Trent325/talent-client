import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Navbar from "../nav/NavBar";
import Login from "../auth/Login";
import Register from "../auth/Register";
import JobListpage from "../pages/JobListApplicant";
import AuthRoute from "../context/route";
import Manager from "../pages/JobListHiring";
import JobDetails from "../pages/JobDetails";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobList" element={<AuthRoute element={JobListpage} />} />
        <Route path="/hiringManager" element={<AuthRoute element={Manager} />} />
        <Route path="/jobdetails/:jobId" element={<AuthRoute element={JobDetails} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;