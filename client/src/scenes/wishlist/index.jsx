import React from 'react';
import { Box, Button, InputLabel, MenuItem, Select, Typography,  } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Wishlist() {
const Ages = [];

for (let i = 8; i <= 115; i++) {
  Ages.push({ value: String(i), label: String(i) });
}

console.log(Ages);

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
            defaultValue="female"
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
        // value={age}
        label="Age"
        // onChange={handleChange}
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
        <Button variant='contained'>Continue</Button>
    </Box>
  </Box>
}

export default Wishlist