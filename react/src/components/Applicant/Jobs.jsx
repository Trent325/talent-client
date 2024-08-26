import React, { useState, useEffect, useContext } from "react";
import { Button, Card, CardContent, Grid, Typography, CardMedia } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import noImage from "../../assets/noimage.jpg";
import { Link } from "react-router-dom";


const Jobs = () => {
    const [loading, setLoading] = useState(true);
    const [jobsData, setJobsData] = useState(undefined);
    let card = null;
    const [relode, setRelode] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const { data } = await axios.get('http://localhost:3000/events');
                const data = [{
                    _id: 1,
                    title:'Application Developer',
                    category:'SDE',
                    description:'Please Apply Free salary',
                    location:'ADP,roseland',
                    jobPostedOn:'02/31/1900',
                    SalaryRange:'$4000000'
                },{
                    _id: 2,
                    title:'Application Developer 2',
                    category:'SDE2',
                    description:'Please Apply Free salary',
                    location:'ADP,roseland',
                    jobPostedOn:'02/31/1900',
                    SalaryRange:'$4000000'
                }]
                setJobsData(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [relode]);

    const buildCard = (job) => {
        return (
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} key={job._id}>
                <Card
                    sx={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        marginTop: 5,
                        boxShadow:
                            "0 15px 30px rgba(0,0,0,0.30), 0 10px 8px rgba(0,0,0,0.22);",
                        textDecoration: "none",
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{ minWidth: '40px', maxWidth: '250px', objectFit: 'cover', minHeight: '40px' }}
                        image={noImage}
                        alt="No Image here"
                    />
                    <CardContent sx={{ marginLeft: "50px", textAlign: 'left', color: "black", }}>
                        <Link className="Link-for-eventcard" to={`/jobdetails/${job._id}`} style={{ textDecoration: 'none' }}>
                            <Typography variant="h5" component="h1" gutterBottom>
                                Title: {job.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Category: {job.category}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Date: {job.jobPostedOn}
                            </Typography>
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    card =
    jobsData &&
    jobsData.map((job) => {
        return buildCard(job);
    });

    if (loading) {
        return (
            <h1>Loading.....</h1>
        );
    } else {
            return (
                <>
                    {/* <div style={{ marginTop: '30px', justifyContent: 'flex-end', display: 'flex', marginRight: '8.5%' }}>
                        <Button variant="contained" startIcon={<AddCircleIcon />} onClick={() => {
                            navigate("/addevents", { state: { title: '', date: '', location: '', description: '', budget: '', RSVPdeadline: '', status: '', } });
                        }}>
                            Add Events
                        </Button>
                    </div> */}
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "100px"
                        }}
                    >
                        {card}
                    </Grid>
                </>
            );
    }
};

export default Jobs;