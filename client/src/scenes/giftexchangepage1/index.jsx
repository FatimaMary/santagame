import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import GiftExchangePage2 from './giftexchange2';
import { useNavigate } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";

function GiftExchangePage1() {
    const navigate = useNavigate();

    function moveToNextPage() {
        navigate("/giftexchange2")
    }
  return (
    <Box>
        <Typography>Join our Gift Exchange</Typography>
        <Typography>User invites to draw names for groupname with user, member1, member2, member3</Typography>
        <Box>
            <Typography>Date of gift exchange: Date</Typography>
            <Typography>Budget: <BiRupee/>Amount</Typography>
        </Box>
        <Box>
          <Typography>Message from Organiser Name</Typography>
          <Typography> We're going to draw names! Make a wish list and draw name so that everyone has time to buy a gift.</Typography>
        </Box>
        <Box>
          <Button>Continue</Button>
        </Box>
    </Box>
  )
}

export default GiftExchangePage1;

//Bring Player names, groupname date of exchange, budget, message from group create page,