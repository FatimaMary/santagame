import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
import axios from 'axios';

function GiftExchangePage1() {
    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const groupId = searchParam.get("groupId");

    function moveToNextPage() {
      axios .post("http://localhost:2318/players/add", {
        invitationAccepted: 'true',
        groupId: groupId,
      }).then ((response) => {
        console.log("player acceptance",response);
        console.log("player data", response.data);
        navigate(`/giftexchange2?playerId=${response.data.playerId}`);
      })
    }
  return (
    <Box 
      m='1.5rem 2.5rem'
      width={600}
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: '25px'
      }}
    >
        <Typography
          variant='h3'
          color='red'
        >
          Join our Gift Exchange
        </Typography>
        <Typography
          variant='body1'
          fontWeight='bold'
        >
          User invites to draw names for groupname with user, member1, member2, member3
        </Typography>
        <Box 
          display='flex'
          flexDirection='column'
          gap={2}
        >
            <Typography>Date of gift exchange: Date</Typography>
            <Typography>Budget: <BiRupee/>Amount</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
        >
          <Typography>Message from Organiser Name</Typography>
          <Typography
            variant='body1'
            fontStyle='italic'
          > 
            We're going to draw names! Make a wish list and draw name so that everyone has time to buy a gift.
          </Typography>
        </Box>
        <Box>
          <Button 
            onClick={moveToNextPage}
            sx={{
              border: '2px solid red',
              borderRadius: '20px',
              width: '150px',
              color: 'green',
              fontWeight: 'bold',
             
            }}
            // hover= {{
            //   background: 'red'
            // }}
          >
            Continue
          </Button>
        </Box>
    </Box>
  )
}

export default GiftExchangePage1;

//Bring Player names, groupname date of exchange, budget, message from group create page,