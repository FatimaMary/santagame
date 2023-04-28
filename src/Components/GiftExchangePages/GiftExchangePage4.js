import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { Box, Typography, Button } from '@mui/material';

function GiftExchangePage4() {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography>
          Product
      </Typography>
      <Box>
        <TiTick/>
        <Typography>
          You are now a member of the group.
        </Typography>
      </Box>
      <Typography>
        You <b>haven't made a wish list</b> yet or added any hobbies
      </Typography>
      <Button>Make a wish list</Button>
      <Box>
        <Typography>Vist the group page</Typography>
      </Box>
    </Box>
  )
}

export default GiftExchangePage4