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
    const [playerEmail, setPlayerEmail] = useState();
    const navigate = useNavigate();

    function handleSend(e) {
        e.preventDefault();
        console.log("e.target.value: ", playerEmail);
        // const email = playerEmail
        navigate(`/dashboard?email=${playerEmail}`)
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
            <Box >
                <Typography>Your email</Typography>
                <TextField
                    id="outlined-basic" label="Email" variant="outlined"
                    placeholder='Enter Your Email'
                    sx={{
                        width: '300px',
                    }}
                    value={playerEmail}
                    onChange={(e) => setPlayerEmail(e.target.value)}
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