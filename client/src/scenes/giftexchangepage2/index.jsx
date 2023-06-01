import React, {useEffect, useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button, InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import axios from 'axios';
import borderImage from '../../assets/Background6.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";

function GiftExchangePage2() {
  const navigate = useNavigate();
  const [playerDetails, setPlayerDetails] = useState({
    playerEmail: "",
    playerName: "",
  })
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(true);
  const [searchParam] = useSearchParams();
  // const playerId = searchParam.get("playerId");
  const groupId = searchParam.get("groupId");
  const [names, setNames] = useState([]);
  const [organiser, setOrganiser] = useState({});
  

  useEffect(() => {
    axios.get(`http://localhost:2318/group/single/${groupId}`)
      .then(res => {
        console.log("response" , res);
        console.log("organiser name: ", res.data.organiserName);
        setNames(res.data.friendsName);
        setOrganiser(res.data.organiserName);
      })
  }, []);

    const handleChange = (e) => {
      setPlayerDetails({
        ...playerDetails,
        [e.target.name]: e.target.value
      })
    }
    function generateUserID(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let userID = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        userID += characters.charAt(randomIndex);
      }
      return userID;
    }

    const handleClick = (e) => {
      e.preventDefault();
        axios.post('http://localhost:2318/giftuser/add',{
          userId: generateUserID(10),
          name: playerDetails.playerName,
          email: playerDetails.playerEmail,
        })
        .then((response) => {
          console.log("post response: ", response);
        })
        axios.put(`http://localhost:2318/players/update/${playerDetails.playerName}/${groupId}`, {
        invitationAccepted: 'true',
        playerEmail: playerDetails.playerEmail,
      })
      .then((response) => {
        console.log("update response: ",response);
        console.log("update data: ",response.data);
        navigate(`/giftexchange3?email=${playerDetails.playerEmail}`);
      })
    }

  return (
    <Box 
      m='1.5rem 2.5rem'
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px',  
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
        <InputLabel id="demo-select-small-label">Player Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playerDetails.playerName}
          name='playerName'
          label="Player Name"
          onChange={handleChange}
          onClick={() => setShow(!show)}
          sx={{ width: '300px' }}
          // placeholder='Player name'
        >
          <MenuItem value={organiser}>{organiser}</MenuItem>
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
                value={playerDetails.playerEmail}
                onChange={handleChange}
                name='playerEmail'
        />
          <Box>
            <Typography>--------- or confirm with just one Click ---------</Typography>
          </Box>
          <Box sx={{
            display: 'flex', 
            justifyContent: 'space-around',
             width:"300px"
             }}
          >
          <Box 
            sx={{ 
              display: 'flex', 
              border:'1px solid blue', 
              alignItems: 'center', 
              borderRadius: '20px', 
              width: '100px', 
              justifyContent: 'space-around'
            }}
          >
            <BsFacebook color='skyBlue' />
            <Typography color='skyblue'>Facebook</Typography>
          </Box>
          <Box
             sx={{ 
              display: 'flex', 
              border:'1px solid blue', 
              alignItems: 'center', 
              borderRadius: '20px', 
              width: '80px', 
              justifyContent: 'space-around'
            }}
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