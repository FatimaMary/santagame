import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function GiftExchangePage3() {
  return (
    <Box m='1.5rem 2.5rem' width={320}>
      <Typography
        variant='h4'
        color='red'
        mb={2}
      >
        There is one thing left to do!
      </Typography>
      <Typography 
        mb={2}
        variant='body1'
      >
        You'll now receive an email at <b>emailId</b>. Use this email to join the group; then you can make a wish list and draw a name. 
      </Typography>
      <Box>
        <Typography>If you did not receive the confirmation email, you can <a>resend</a> it.</Typography>
      </Box>
    </Box>
  )
}

export default GiftExchangePage3

//get email id from giftexchangepage2