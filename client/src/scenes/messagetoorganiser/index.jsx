import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

function MessageToOrganiser() {
    const [searchParam] = useSearchParams();
    const email = searchParam.get("email");
    // const groupId = searchParam.get("groupId");

    // console.log("group Id: ", groupId);

  return (
    <Box
      m='1.5rem 2.5rem'
      sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap:'20px'}}
    >
        <Typography 
            variant='h4'
            color='green'
        >
            Attention! There is one thing left to do
        </Typography>
        <Typography 
            variant='body1'
            color='blue'
        >
            An email has been sent to <a href='https://mail.google.com/'>{email}</a>. Open the email to confirm
            your email address and to choose how you want to send the invitations.
        </Typography>
        <Typography
            variant='body1'
            color='blue'
        >
        If you did not receive the confirmation email, you can <a>resend</a> it.
        </Typography>
        <Typography
            // sx={{ color: 'red'}}
        >
            <a href="https://mail.google.com/" style={{color: 'red'}} >
            Go to Gmail.com
            </a>
        </Typography>
    </Box>
  )
}

export default MessageToOrganiser