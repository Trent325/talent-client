import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Navbar from "../nav/NavBar";
import Login from "../auth/Login";
import Register from "../auth/Register";
import JobListpage from "../pages/JobListApplicant";
import AuthRoute from "../context/route";
import AppliedJobListApplicant from "../pages/AppliedJobListApplicant";
import JobDetail from "../pages/JobDetail";
import Profile from "../pages/Profile";



const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobList" element={<AuthRoute element={JobListpage} />} />
        <Route path="/appliedjoblist" element={<AuthRoute element={AppliedJobListApplicant} />}/>
        <Route path="/jobdetails/:id" element={<AuthRoute element={JobDetail}/>}/>
        <Route path="/profile" element={<AuthRoute element={Profile}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
