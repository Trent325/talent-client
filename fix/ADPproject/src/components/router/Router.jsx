import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound"; // Assuming NotFound is in src/pages/
import Navbar from "../nav/NavBar"; // Assuming Navbar is in src/nav/
import Login from "../auth/Login"; // Assuming Login is in src/auth/
import Register from "../auth/Register"; // Assuming Register is in src/auth/
import JobListpage from "../pages/JobListApplicant"; // Assuming JobListApplicant is in src/pages/
import AuthRoute from "../context/route"; // Assuming AuthRoute is a route guard for authenticated users in src/context/
import AdminDashboard from "../admin/AdminDashboard"; // Corrected import path and casing
import AdminRoute from "../context/adminRoute"; // Assuming AdminRoute is a route guard for admin users in src/context/
import AppliedJobListApplicant from "../pages/AppliedJobListApplicant";
import JobDetail from "../pages/JobDetail";
import Profile from "../pages/Profile";
import Manager from "../pages/JobListHiring";
import JobDetails from "../pages/JobDetails";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/jobList" element={<AuthRoute element={JobListpage} />} />
        <Route path="*" element={<NotFound />} />
        {/* Admin Routes */}
        <Route
          path="/admin-panel"
          element={<AuthRoute element={AdminDashboard} />}
        />

        {/* Catch-All Route for 404 */}
      </Routes>
    </Router>
  );
};

export default RouterApp;
