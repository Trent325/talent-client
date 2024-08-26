import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import PostJob from './components/Job/PostJob'
import JobDetails from './components/Job/JobDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/jobdetails" element={<JobDetails />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
  )
}

export default App
