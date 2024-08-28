import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import noImage from "../../assets/noimage.jpg";
import { useJobById } from "../hooks/manager/useGetSingleJob";
import { Spinner } from "react-bootstrap";
import ApplicantCard from "../HmJobList/ApplicantCard";
import { useApplicants } from "../hooks/manager/useGetApplicants";

const JobDetails = () => {
  const { jobId } = useParams();
  const { data: job, error: jobError, isLoading: jobLoading } = useJobById(jobId);

  const applicantIds = job?.applicants || [];
  const {
    data: applicants,
    error: applicantsError,
    isLoading: applicantsLoading,
  } = useApplicants(applicantIds);

  if (jobLoading || applicantsLoading)
    return (
      <div className="flex justify-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  if (jobError) return <Typography>Error: {jobError.message}</Typography>;
  if (applicantsError)
    return <Typography>Error: {applicantsError.message}</Typography>;
  if (!job) return <Typography>No job found</Typography>;

console.log(applicants);
  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow:
              "0 15px 30px rgba(0,0,0,0.30), 0 10px 8px rgba(0,0,0,0.22);",
            padding: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxWidth: "250px",
              objectFit: "cover",
              height: "auto",
            }}
            image={noImage}
            alt="No Image"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {job.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Category: {job.category}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Description: {job.description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Location: {job.location}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Salary: {job.salary}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Post Date: {new Date(job.postDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Applicants: {job.applicants.length}
            </Typography>
          </CardContent>
        </Card>
        <div
          className="mt-5 mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2>Applicants</h2>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {applicants?.map((applicant) => (
            <Grid item xs={12} sm={6} md={4} key={applicant._id}>
              <ApplicantCard applicant={applicant} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobDetails;
