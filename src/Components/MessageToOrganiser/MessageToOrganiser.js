import React from 'react';
import { Box, Typography } from '@mui/material';

function MessageToOrganiser() {
  return (
    <Box>
        <Typography 
            variant='h3'
            color='red'
        >
            Attention! There is one thing left to do
        </Typography>
        <Typography>
            An email has been sent to EmailId. Open the email to confirm
            your email address and to choose how you want to send the invitations.
        </Typography>
        <Typography>
        If you did not receive the confirmation email, you can <a>resend</a> it.
        </Typography>
        <Typography>
            <a href="https://mail.google.com/" >
            Go to Gmail.com
            </a>
        </Typography>
    </Box>
  )
}

export default MessageToOrganiser