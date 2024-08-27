import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location2 = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(location2.state?.name || "John Doe");
  const [school, setSchool] = useState(location2.state?.school || "ABC University");
  const [degree, setDegree] = useState(location2.state?.degree || "Bachelor of Science");
  const [resume, setResume] = useState(location2.state?.resume || null);
  const [resumeFileName, setResumeFileName] = useState("Upload Resume (PDF)");

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("school", school);
    formData.append("degree", degree);
    if (resume) {
      formData.append("resume", resume);
    }

    // Uncomment the axios block below to enable actual API requests
    /*
    await axios
      .post(
        "http://localhost:4000/api/v1/user/profile",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
    */

    setIsEditing(false);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
      setResumeFileName(file.name);
    } else {
      toast.error("Please upload a valid PDF file.");
      setResume(null);
      setResumeFileName("resume.pdf");
    }
  };

  return (
    <>
      <div className="user_profile page">
        <div className="container">
          <h1 className="profile-heading">User Profile</h1>
          {isEditing ? (
            <form onSubmit={handleProfileUpdate} className="profile-form">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="input-group">
                <label>School</label>
                <input
                  type="text"
                  required
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="School"
                />
              </div>
              <div className="input-group">
                <label>Degree</label>
                <input
                  type="text"
                  required
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  placeholder="Degree"
                />
              </div>
              <div className="input-group">
                <label>Resume</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleResumeChange}
                />
                <p>{resumeFileName}</p>
              </div>
              <div className="button-group">
                <button type="submit" className="save-button">Save Changes</button>
                <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </form>
          ) : (
            <div className="profile-details">
              <div className="detail">
                <strong>Name:</strong> <span>{name}</span>
              </div>
              <div className="detail">
                <strong>School:</strong> <span>{school}</span>
              </div>
              <div className="detail">
                <strong>Degree:</strong> <span>{degree}</span>
              </div>
              <div className="detail">
                <strong>Resume:</strong> <a href={resume ? URL.createObjectURL(resume) : "#"} target="_blank" rel="noopener noreferrer">{resumeFileName}</a>
              </div>
              <button className="update-button" onClick={() => setIsEditing(true)}>Update Profile</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
