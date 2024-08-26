import React, { useState, useEffect, useContext } from "react";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const currentuser = { isAdmin: false, isHR: false };
    const navigate = useNavigate();


    return (
        <>
        {
            currentuser.isHR
            ?
            ( 
            <Navigate to={`/jobshiring`} />
        ) :
            (
                 <Navigate to={`/jobs`} />
            )
        }
        </>
    );
};

export default Dashboard;