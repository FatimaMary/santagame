import React from 'react';
import { Box, Typography } from '@mui/material';
import { MdContentCopy, MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function Invitation() {
  return (
    <Box 
      m='1.5rem 2.5rem'
      sx={{ display: 'flex', flexDirection: 'column', gap: '20px',  }}
    >
        <Typography 
            variant='h5'
            color='green'
        >
            The invitations have not yet been sent
        </Typography>
        <Typography 
            variant='body1'
            color='purple'
            fontSize='1.5rem'
        >
            The celebration has been confirmed. Send the invitations now. Then everyone can draw a name and make a wishlist.
        </Typography>
        <Box
          width='200px'
          sx={{display: 'flex', justifyContent: 'space-around' }}
          fontSize='1.5rem'
          color='red'
        >
            <MdContentCopy/>
            <Typography 
                variant='h6'
            >Copylink</Typography>
            <MdArrowForwardIos />
        </Box>
    </Box>
  )
}

export default Invitation