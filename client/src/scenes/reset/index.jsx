import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Reset() {
  return (
    <Box>
        <Typography>Reset Password</Typography>
        <Typography>Forgot your password?</Typography>
        <Typography>Enter your email address, and we'll email you a link to reset it.</Typography>
        <Box>
            <TextField/>
            <Button>Send Password Reset Link</Button>
        </Box>
    </Box>
  )
}

export default Reset