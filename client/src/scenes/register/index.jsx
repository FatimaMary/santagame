import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterValidation from '../../Components/RegisterValidation';
import { Box, Typography, TextField, FormControl as Form, Button, } from '@mui/material';


function Register() {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    const updateHandleChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        // setLoading(true);
        e.preventDefault();
        console.log("button clicked");
        // setErrors(RegisterValidation(registerData));
        // setDataIsCorrect(true);
        const name = e.target[0].value;
        const mobileNumber = e.target[1].value
        const email = e.target[2].value;
        const password = e.target[3].value;
    }

  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column' ,
        justifyContent: 'space-around',
        justifyContent: 'center',
        alignItems: 'center'
    }}
      mt='50px'
      color='blue'
    >
        <Box>
            <Typography
                variant='h3'
            >
                Register Here
            </Typography>
            <Typography 
                variant='h4'
            >
                It's Free!
            </Typography>
            <Typography
                variant='h6'
            >
                Register to get started on your wishlist immediately
            </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
            <Box
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '10px', 
                }}
            >
                <TextField 
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" 
                    sx={{
                        margin: '1rem',
                        width: '400px',
                        borderRadius: '10px',
                    }}
                    type='text'
                    name='name'
                    value={registerData.name}
                    onChange={updateHandleChange}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Mobile Number" 
                    variant="outlined" 
                    sx={{
                        margin: '1rem',
                        width: '400px',
                        borderRadius: '10px',
                    }}
                    type='text'
                    name='mobileNumber'
                    value={registerData.mobileNumber}
                    onChange={updateHandleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    sx={{
                        margin: '1rem',
                        width: '400px',
                        borderRadius: '10px',
                    }}
                    type='email'
                    name='email'
                    value={registerData.email}
                    onChange={updateHandleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <TextField 
                    id='outlined-basic' 
                    label='Password' 
                    variant='outlined' 
                    sx={{
                        margin: '1rem',
                        width: '400px',
                        borderRadius: '10px',
                    }}
                    type='password'
                    name='password'
                    value={registerData.password}
                    onChange={updateHandleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    mb='15px'
                >
                    <Button 
                        sx={{ 
                            border: '2px solid skyblue',
                            borderRadius: '20px',
                            width: '200px',
                            fontSize: '1rem',
                            color: 'green',
                        }}
                    type="submit"
                    >
                        Register
                    </Button>
                    {err && <span>Something went wrong</span>}
                </Box>
            </Box>
        </form>
    </Box>
  )
}

export default Register