import React, {useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button, InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
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
  const [playerName, setPlayerName] = useState();

  const names = [
   'Organiser', 
    'member1',
    'member2',
    'member3',
    'member4'
  ]
  return (
    <Box 
      m='1.5rem 2.5rem'
      sx={{ display: 'flex', flexDirection: 'column', gap: '20px', 
      // border: '30px solid transparent',
      // padding:'15px',
      // borderImage: 'url(../../assets/Background6.png) 50 round' 
    }}
    width={400}
    >
      <Box>
        <Typography
          variant='h4'
          color='red'
        >Join Our Gift exchange</Typography>
        <Typography 
          variant='body1'
          fontStyle='italic'
          color='green'
        >Tell us <b>who you are </b> and confirm by email or social media to join the group.</Typography>
      </Box>
      <Box>
        <Typography>Your own name</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playerName}
          label="Player Name"
          onChange={(e) => setPlayerName(e.target.value)}
          onClick={() => setShow(!show)}
          sx={{ width: '300px' }}
          placeholder='Player name'
        >
         {names.map((name) => (
          <MenuItem 
            key={name}
            value={name}
          >
              {name}
          </MenuItem>
         ))}
        </Select>
      </Box>
      {show ? null : (<Box>
        <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                sx={{
                    // margin: '1rem',
                    width: '300px',
                    borderRadius: '10px',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
        />
          <Box>
            <Typography>--------- or confirm with just one Click ---------</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-around', width:"300px"}}>
          <Box 
            sx={{ display: 'flex', border:'1px solid blue', alignItems: 'center', borderRadius: '20px', width: '100px', justifyContent: 'space-around'}}
          >
            <BsFacebook color='skyBlue' />
            <Typography color='skyblue'>Facebook</Typography>
          </Box>
          <Box
             sx={{ display: 'flex', border:'1px solid blue', alignItems: 'center', borderRadius: '20px', width: '80px', justifyContent: 'space-around'}}
          >
            <FcGoogle color='green'/>
            <Typography color='green'>Google</Typography>
          </Box>
          </Box>
       </Box>
       )}
       <Button>Join the Group</Button>
    </Box>
  )
}

export default GiftExchangePage2

//get player names from group creation page