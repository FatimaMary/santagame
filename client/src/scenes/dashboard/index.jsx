import React, { useEffect, useState } from 'react';
import { 
    Box, 
    TextField, 
    Typography,
    CardContent, 
    Input,
    Button
} from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function Dashboard() {
    const [dashboardData, setDashboardData] = useState([]);
    const [searchParam] = useSearchParams();
    const email = searchParam.get["email"];

    // useEffect(() => {
        axios.get(`http://localhost:2318/players/groups/${email}`)
            .then((response) => {
                console.log("dashboard response: " , response);
                setDashboardData(response.data);
            })
    // }, []);
    
  return (
   <Box 
    m='1.5rem 2.5rem'
    width={500}
   >
        <Typography>My Group Page</Typography>
        <CardContent>
            <Typography>{dashboardData.groupName}</Typography>
        </CardContent> 
   </Box>
  )
}

export default Dashboard