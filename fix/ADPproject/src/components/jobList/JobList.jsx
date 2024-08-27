import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import JobCard from './card';
import { useJobs } from '../hooks/useGetJobs';

const Jobs = () => {
  const { data: jobsData, isLoading, isError, error } = useJobs();
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  console.log(jobsData);

  return (
    <>
      <div className="mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Jobs</h2>
      </div>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '100px',
        }}
      >
        {jobsData?.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </Grid>
    </>
  );
};

export default Jobs;