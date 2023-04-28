import React, {useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

function GiftExchangePage2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [error, setError] = useState({});
  const [isEmail, setIsEmail] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <Box>
      <Box>
        <Typography>Join Our Gift exchange</Typography>
        <Typography>Tell us <b>who you are </b> and confirm by email or social media to join the group.</Typography>
      </Box>
      <Box>
        <Typography>Your own name</Typography>
        <Select>
          <MenuItem >Organiser</MenuItem>
          <MenuItem >User1</MenuItem>
          <MenuItem >User2</MenuItem>
          <MenuItem >User3</MenuItem>
          <MenuItem >User4</MenuItem>
        </Select>
      </Box>
      {show ? null : (<Box>
        <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                sx={{
                    margin: '1rem',
                    width: '400px',
                    borderRadius: '10px',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
        />
          <Box>
            <Typography>-------------------- or confirm with just one Click ---------</Typography>
          </Box>
          <Box>
            <BsFacebook/>
            <Typography>Facebook</Typography>
          </Box>
          <Box>
            <FcGoogle/>
            <Typography>Google</Typography>
          </Box>
       </Box>
       )}
       <Button>Join the Group</Button>
    </Box>
  )
}

export default GiftExchangePage2

//get player names from group creation page