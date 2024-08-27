import React from 'react';
import { Grid } from '@mui/material';
import JobCard from './card';
import { useJobs } from '../hooks/useGetHMjob';

const Jobs = () => {
  const { data: jobsData, isLoading, isError, error } = useJobs();

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