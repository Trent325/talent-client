import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, CardMedia, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import noImage from '../../assets/noimage.jpg';
import { useDeleteJob } from '../hooks/manager/useDeleteJob';

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);
  const { mutate: deleteJob } = useDeleteJob();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteJob(job._id);
      handleClose(); // Close the modal after deletion
    } catch (error) {
      console.error('Failed to delete job:', error);
    }
  };

  return (
    <Grid item xs={10} sm={10} md={10} lg={10} xl={10} key={job._id}>
      <Card
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          marginTop: 5,
          boxShadow:
            '0 15px 30px rgba(0,0,0,0.30), 0 10px 8px rgba(0,0,0,0.22);',
          textDecoration: 'none',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            minWidth: '40px',
            maxWidth: '250px',
            objectFit: 'cover',
            minHeight: '40px',
          }}
          image={noImage}
          alt="No Image here"
        />
        <CardContent
          sx={{ marginLeft: '50px', textAlign: 'left', color: 'black' }}
        >
          <Link
            className="Link-for-eventcard"
            to={`/jobdetails/${job._id}`}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="h5" component="h1" gutterBottom>
              {job.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Category: {job.category}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Location: {job.location}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Date: {job.postDate}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Salary: {job.salary}
            </Typography>
          </Link>
          <IconButton
            onClick={handleClickOpen}
            sx={{ color: 'red', marginTop: 2 }}
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this job?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default JobCard;