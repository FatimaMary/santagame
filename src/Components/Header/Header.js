import React from 'react';
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box>
        <Typography 
            variant='h3'
            fontWeight='bold'
            fontStyle='italic'
        >
            Secret Santa Generator
        </Typography>
        <Typography>
            Organise your Secret Santa using Email or WhatsApp.
        </Typography>
        <Typography>
            Have you drawn names before?
        </Typography>
        <Typography>
            Use your 2022 group to make sure no one draws last year's gift exchange name.
        </Typography>
    </Box>
  )
}

export default Header