import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  Box
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/noimage.jpg";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Modal, Backdrop, Fade } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
// import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();
  const currentuser = { isAdmin: false, isHR: true };
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    // axios
    //   .get(`http://localhost:4000/api/v1/job/${id}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     setJob(res.data.job);
    //   })
    //   .catch((error) => {
    //     navigateTo("/notfound");
    //   });

    setJob({
      title: "Application Developer",
      category: "Artificial Intelligence",
      location: "1 Adp Blvd, Roseland, NJ 07068",
      description: "ldklhlglxigh/nngfnlig",
      jobPostedOn: "2023.02.24",
      expectedSalary: "123456",
      _id: { id },
    });

    setApplicants(
      [
        {_id:'1',name:'ridham patel',email:'rydhamik@gmail.com',phoneNumber:'5088688287'},{_id:'2',name:'dev patel',email:'dev@gmail.com',phoneNumber:'5088688287',}
      ]
    );


  }, []);

  //   if (!isAuthorized) {
  //     navigateTo("/login");
  //   }


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const GuestsComponent = ({ isOpen, onClose, data }) => {
    return (
      <Modal
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={isOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50%', // Set the desired width
              maxHeight: '100vh', // Set the desired max height
              minHeight: '60vh',
              overflowY: 'auto', // Enable vertical scrolling
              bgcolor: 'background.paper',
              border: '0px solid #000',
              boxShadow: 20,
              p: 4,
              borderRadius: '5px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '10px',
              }}
            >
              <Button onClick={onClose} variant="contained" className="buttons">Close</Button>
            </div>
            {data.map((element, index) => (
              <Card
                key={index} // Adding a unique key for each element in the array
                variant='outlined'
                sx={{
                  height: 'auto',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 1,
                  boxShadow:
                    '0 5px 10px rgba(0,0,0,0.30), 0 5px 10px rgba(0,0,0,0.22);',
                }}
              >
                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='span'
                    sx={{
                      borderBottom: '1px solid #1e8678',
                      fontWeight: 'bold',
                      marginLeft: '20%',
                    }}
                    className="card-content-margin"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <dl>
                        <p>
                          <dt className='title2'>Name: {element.name} </dt>
                          <dt className='title2'>Email: {element.email} </dt>
                          <dt className='title2'>Gender: {element.phoneNumber}</dt>
                        </p>
                      </dl>
                      <div>
                        <IconButton aria-label="delete" color="primary" onClick={() => {

                        }}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="accept" color="primary" onClick={() => {

                        }}>
                          <HowToRegIcon />
                        </IconButton>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Fade>
      </Modal>
    );
  };



  return (
    <section className="jobDetail page">
      <div className="container">
        <h3>Job Details</h3>
        <div className="banner">
          <div>
            <img src={noImage} alt="job image" />
          </div>
          <p>
            Title: <span> {job.title}</span>
          </p>
          <p>
            Category: <span>{job.category}</span>
          </p>
          <p>
            Description: <span>{job.description}</span>
          </p>
          <p>
            Location: <span>{job.location}</span>
          </p>
          <p>
            Job Posted On: <span>{job.jobPostedOn}</span>
          </p>
          <p>
            Expected Salary: <span>{job.expectedSalary}</span>
          </p>
          {/* {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job._id}`}>Apply Now</Link>
          )} */}
          <div
            style={{
              marginTop: "15px",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {currentuser.isHR ? (
              <>
                <Button variant="contained" onClick={() => {
                  navigate("/postjob", {
                    state: {
                      title: job.title,
                      category: job.category,
                      location: job.location,
                      expectedSalary: job.expectedSalary,
                      jobPostedOn: job.jobPostedOn,
                      description: job.description
                    }
                  });
                }}>
                  Update
                </Button>
                <span style={{ width: '10px', display: 'inline-block' }}></span>
                <Button variant="contained" onClick={handleOpenModal}>
                  Applications
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" onClick={() => { }}>
                  Apply
                </Button>
              </>
            )}
          </div>
        </div>
        <GuestsComponent isOpen={isModalOpen} onClose={handleCloseModal} data={applicants} />
      </div>
    </section>
  );
};

export default JobDetails;
