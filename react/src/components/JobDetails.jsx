import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/noimage.jpg";
// import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigate = useNavigate();
  const currentuser = { isAdmin: false, isHR: true };

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
  }, []);

  //   if (!isAuthorized) {
  //     navigateTo("/login");
  //   }

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
                  navigate("/postjob", { state: {                     
                    title: job.title,
                    category: job.category,
                    location: job.location,
                    expectedSalary: job.expectedSalary,
                    jobPostedOn: job.jobPostedOn,
                    description: job.description} });
                }}>
                  Update
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" onClick={() => {}}>
                  Apply
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
