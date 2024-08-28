import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useAcceptApplicant } from '../hooks/manager/hiring/useAccept';
import { useDeclineApplicant } from '../hooks/manager/hiring/useDecline';

const ApplicantCard = ({ applicant, jobId }) => {
  const { mutate: acceptApplicant, isLoading: isAccepting } = useAcceptApplicant();
  const { mutate: declineApplicant, isLoading: isDeclining } = useDeclineApplicant();

  const handleAccept = () => {
    console.log(jobId);
    acceptApplicant({ jobId, applicantId: applicant._id });
  };

  const handleDecline = () => {
    declineApplicant({ jobId, applicantId: applicant._id });
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 15px 30px rgba(0,0,0,0.30), 0 10px 8px rgba(0,0,0,0.22);',
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="body1" gutterBottom>
          <b>{applicant.username}</b>
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

      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', padding: 1 }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleAccept}
          disabled={isAccepting || isDeclining} // Disable during any mutation
        >
          {isAccepting ? 'Accepting...' : 'Accept'}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDecline}
          disabled={isDeclining || isAccepting} // Disable during any mutation
        >
          {isDeclining ? 'Declining...' : 'Decline'}
        </Button>
      </Box>
    </Card>
  );
};

export default ApplicantCard;
