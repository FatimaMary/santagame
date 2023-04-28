import React from 'react';
import { Box, Typography } from '@mui/material';
import GiftExchangePage1 from '../scenes/giftexchangepage1';

function Header() {
  return (
    <Box 
        display='flex'
        gap='15px'
        flexDirection='column'
    >
        <Typography 
            variant='h3'
            fontWeight='bold'
            fontStyle='italic'
            color='red'
        >
            Secret Santa Generator
        </Typography >
        <Typography color='green'>
            Organise your Secret Santa using Email or WhatsApp.
        </Typography>
        <Typography color='green'>
            Have you drawn names before?
        </Typography>
        <Typography color='green'>
            Use your 2022 group to make sure no one draws last year's gift exchange name.
        </Typography>
    </Box>
  )
}

export default Header