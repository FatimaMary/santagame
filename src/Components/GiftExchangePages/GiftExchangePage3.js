import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function GiftExchangePage3() {
  return (
    <Box>
      <Typography>There is one thing left to do!</Typography>
      <Typography>You'll now receive an email at <b>emailId. Use this email to join the group; then you can make a wish list and draw a name.</b> </Typography>
      <Box>
        <Typography>If you did not receive the confirmation email, you can <a>resend</a> it.</Typography>
      </Box>
    </Box>
  )
}

export default GiftExchangePage3

//get email id from giftexchangepage2