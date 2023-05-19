import React, { useEffect, useState } from 'react';
import { 
    Box, 
    TextField, 
    Typography,
    CardContent, 
    Card,
    Input,
    Button
} from '@mui/material';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
// import { useGetFullDetailsByEmailQuery } from '../../state/api';
import Slider from '../slider/Slider';
import { slidesData } from '../slider/slidesData';

function Dashboard() {
    const [dashboardData, setDashboardData] = useState([]);
    const [searchParam] = useSearchParams();
    const email = searchParam.get("email");
    
    
    useEffect(() => {
        console.log("email: ", email);
        axios.get(`http://localhost:2318/players/details/${email}`)
            .then((response) => {
                console.log("dashboard response: " , response);
                setDashboardData(response.data);
            })
    }, []);
    
  return (
    <Box display="flex" width="100%" height="100%" m='1.5rem 2.5rem'>
      <Box 
        m='1.5rem 2.5rem'
        width='50%'
      >
        <Typography
            variant='h5'
            color='green'
        >
            My Group Page
        </Typography>
        {dashboardData.map((cardData, i) => (
            <Card sx={{ width: 350, m: '1.5rem' }} key={i}>
            <CardContent>
              <Typography sx={{ fontSize: 16 }}  variant='h6' fontWeight='bold' color='red' >
               {cardData.groupName}
              </Typography>
              <Typography variant="body2" fontWeight='bold'>
                {cardData.giftExchangeDate}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* {cardData.organiserName}, {cardData. friendsName[0]}, {cardData. friendsName[1]}, {cardData. friendsName[2]}, {cardData. friendsName[3]} */}
              </Typography>
            </CardContent>
          </Card>
        )) }
      </Box>
      <Box>
        <Slider slides = {slidesData} />
      </Box>
    </Box>
   
  )
}

export default Dashboard