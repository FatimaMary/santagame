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
import { useNavigate } from 'react-router-dom';

function RetrievePage() {
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    function handleSend(e) {
        e.preventDefault();
        navigate(`/dashboard?email=${email}`)
    }
    
  return (
         <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '15px',
            }}
            m='1.5rem 2.5rem'
            width={500}
        >
            <Box
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <Typography
                    variant='h4'
                    // fontSize={}
                >
                    My Group Page
                </Typography>
                <Typography>View your wish list and your drawn name on the group page.</Typography>
                <Typography>Enter your email address and we will resend it. You can also create an account for easy access.</Typography>
            </Box>
            <Box>
                <Typography>Your email</Typography>
                <TextField
                    placeholder='Enter Your Email'
                    sx={{
                        width: '300px',
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Box>
            <Box ml={6}
            >
                <Button 
                    variant='contained'
                    sx={{ 
                        width: '100px',
                        borderRadius: '20px'
                    }}
                    onClick={handleSend}
                >
                    Send
                </Button>
            </Box>
        </Box>
  )
}

export default RetrievePage