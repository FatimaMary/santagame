import React, { useState } from 'react';
import { Box, Button, InputLabel, MenuItem, Select, Typography,  } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Wishlist() {
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const navigate = useNavigate();

    const Ages = [];
    for (let i = 8; i <= 115; i++) {
    Ages.push({ value: String(i), label: String(i) });
    }

// console.log(Ages);

    const moveToNextPage = (e) => {
        e.preventDefault();
        axios.post("http://localhost:2318/wishlist/add", {
            sex: gender,
            age: age,
            // playerId: playerId
        }).then((response) => {
            console.log("Wishlist Response: " , response);
            console.log("Wishlist data: " , response.data);
            navigate(`/giftfinder?wishlistId=${response.data.wishlistId}`);
        })
    }

  return <Box m='1.5rem 2.5rem'
    display='flex'
    flexDirection='column'
    gap='15px'
  >
    <Typography 
        variant='h4'
    > 
        My wish list
    </Typography>
    <Box>
        <FormControl>
        <FormLabel 
            // id="demo-radio-buttons-group-label" 
            sx={{
                fontWeight: '1000',
            }}
        >
            I am
        </FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            name="radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="None of the above" />
        </RadioGroup>
        </FormControl>
    </Box>
    <Box>
    <Typography>Age</Typography>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={(e) => setAge(e.target.value)}
        sx={{
            width: '200px'
        }}
      >
        {Ages.map((options) => (
            <MenuItem key={options.value} value={options.value}>
                {options.label} years old
            </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>
    <Box>
        <Button 
            variant='contained'
            onClick={moveToNextPage}
        >
            Continue
        </Button>
    </Box>
  </Box>
}

export default Wishlist