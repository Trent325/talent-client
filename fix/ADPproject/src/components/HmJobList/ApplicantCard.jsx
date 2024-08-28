import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ApplicantCard = ({ applicant }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 15px 30px rgba(0,0,0,0.30), 0 10px 8px rgba(0,0,0,0.22);',
        padding: 2
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {applicant.name || 'Anonymous'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Username: {applicant.username}
        </Typography>
        <Typography variant="body1" gutterBottom>
          School: {applicant.school || 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Degrees: {applicant.degrees ? applicant.degrees.join(', ') : 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Resume: {applicant.resume ? 'Available' : 'Not Provided'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ApplicantCard;
