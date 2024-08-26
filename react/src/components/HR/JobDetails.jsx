import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Context } from "../../main";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

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
        title: 'Application Developer',
        category: 'Software Dev',
        country:'USA',
        city:'Roseland',
        location:'1 Adp Blvd, Roseland, NJ 07068',
        description:'ldklhlglxigh/nngfnlig',
        jobPostedOn:'23/2/24',
        fixedSalary:'123456',
        _id:1
    })
  }, []);

//   if (!isAuthorized) {
//     navigateTo("/login");
//   }

  return (
    <section className="jobDetail page">
      <div className="container">
        <h3>Job Details</h3>
        <div className="banner">
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
            Salary Range :<span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
          </p>
          {/* {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job._id}`}>Apply Now</Link>
          )} */}
           <div className="button-container">
            <Link to={`/application/${job._id}`}>
              <button type="button" className="apply-button">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
