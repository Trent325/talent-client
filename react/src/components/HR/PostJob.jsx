import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PostJob = (props) => {
  const location2 = useLocation();
  const [title, setTitle] = useState(location2.state.title);
  const [description, setDescription] = useState(location2.state.description);
  const [category, setCategory] = useState(location2.state.category);
  const [location, setLocation] = useState(location2.state.location);
  const [expectedSalary, setExpectedSalary] = useState(
    location2.state.expectedSalary
  );
  const [jobPostedOn, setjobPostedOn] = useState(location2.state.jobPostedOn);

  const handleJobPost = async (e) => {
    e.preventDefault();

    console.log('$$$$$$$$$$$',title,'$$$$$$$$$$$',category,'$$$$$$$$$$$',location,'$$$$$$$$$$$',expectedSalary,'$$$$$$$$$$$',jobPostedOn,'$$$$$$$$$$$',description)
    // await axios
    //   .post(
    //     "http://localhost:4000/api/v1/job/post",
    //     {
    //       title,
    //       description,
    //       category,
    //       location,
    //       expectedSalary,
    //     },
    //     {
    //       withCredentials: true,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     toast.success(res.data.message);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });
  };

  const navigateTo = useNavigate();

  return (
    <>
      <div className="job_post page">
        <div
          className="container"
          style={{ marginTop: "35px", marginBottom: "35px" }}
        >
          <form onSubmit={handleJobPost}>
            <div className="wrapper">
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
              />
              <select
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Frontend Web Development">
                  Frontend Web Development
                </option>
                <option value="MERN Stack Development">
                  MERN STACK Development
                </option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">
                  MEAN STACK Development
                </option>
                <option value="MEVN Stack Development">
                  MEVN STACK Development
                </option>
                <option value="Data Entry Operator">Data Entry Operator</option>
              </select>
            </div>
            <div className="wrapper">
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>

            <div className="wrapper">
              <input
                type="text"
                required
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
                placeholder="Expected Salary ($$)"
              />
            </div>

            <div className="wrapper">
              <DatePicker
                label="Date"
                value={dayjs(jobPostedOn)}
                onChange={(value) => setjobPostedOn(value)}
                id="date"
              />
            </div>
            <textarea
              rows="10"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job Description"
            />
            <button type="submit" >Create Job</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
