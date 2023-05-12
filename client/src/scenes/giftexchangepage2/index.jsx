import React, {useEffect, useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button, InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import axios from 'axios';

function GiftExchangePage2() {
  const navigate = useNavigate();
  const [playerEmail, setPlayerEmail] = useState("");
  const [error, setError] = useState({});
  const [isEmail, setIsEmail] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [searchParam] = useSearchParams();
  const playerId = searchParam.get("playerId");
  const groupId = searchParam.get("groupId");
  const [names, setNames] = useState([])

  

  useEffect(() => {
    axios.get(`http://localhost:2318/group/single/${groupId}`)
      .then(res => {
        console.log("response" , res);
        setNames(res.data.friendsName);
      })
  }, []);
  

    const handleClick = (e) => {
      e.preventDefault();
      console.log("player name: ",  playerName);
      console.log("player email: ", playerEmail);
      axios.put(`http://localhost:2318/players/update/${playerId}`, {
        // groupId: groupId,
        playerName: playerName,
        playerEmail: playerEmail,
      })
      .then((response) => {
        console.log("update response: ",response);
        console.log("update data: ",response.data);
        navigate(`/giftexchange3?email=${playerEmail}`);
      })
    }
    // console.log("player name: ",  playerName);

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
                    marginBottom: '1rem',
                    width: '300px',
                    borderRadius: '10px',
                    // height: '200px'
                }}
                value={playerEmail}
                onChange={(e) => setPlayerEmail(e.target.value)}
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
       <Button 
          variant='outlined'
          // color='red'
          sx={{ color: 'red', width:'175px', borderRadius: '25px', border: '1px solid red'}}
          onClick={handleClick}
       >
          Join the Group
        </Button>
    </Box>
  )
}

export default GiftExchangePage2

//get player names from group creation page