import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PostJob from './components/HR/PostJob';
import Jobs from './components/Applicant/Jobs';
import JobsApplied from './components/Applicant/JobsApplied';
import Accepted from './components/HR/Accepted';
import JobsHiring from './components/HR/JobsHiring';


function App() {

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobshiring" element={<JobsHiring />} />
            <Route path="/accepted" element={<Accepted />} />
            <Route path="/jobsapplied" element={<JobsApplied />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/Postjob" element={<PostJob />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
  )
}

export default App
