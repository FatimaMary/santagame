import React, { useEffect, useState } from 'react';
import { 
    Box, 
    TextField, 
    Typography,
    CardContent 
} from '@mui/material';
import axios from 'axios';

function Dashboard() {
    const [dashboardData, setDashboardData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:2318/players/groups")
            .then((response) => {
                console.log("dashboard response: " , response);
                setDashboardData(response.data);
            })
    }, [])
    
  return (
   <Box>
        <Typography>My Group Page</Typography>
        <CardContent>
            <Typography>{dashboardData.groupName}</Typography>
        </CardContent>
   </Box>
  )
}

export default Dashboard