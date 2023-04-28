import React, { useState } from 'react';
import { Box, Typography, FormControl,TextField, Button } from '@mui/material';
// import { TextField  } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../../Components/Validation';

function Login() {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();
        // setErrors(validation(logi))
        console.log("button clicked");
        alert("Form submitted");
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
      color='red'
    >
        <Box>
            <Typography variant='h3'>Login</Typography>
            <Typography type='text'>Login to my WishList.</Typography>
            {/* <Typography type='text'>(If you don't have an account yet, Kindly
                <Link to='/register'>Register Here </Link>)
            </Typography> */}
        </Box>
        <FormControl
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '10px', 

        }}
        onSubmit={handleSubmit}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <TextField 
                id='outlined-basic' 
                label='Password' 
                variant='outlined' 
                sx={{
                    margin: '1rem',
                    width: '400px',
                    borderRadius: '10px',
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
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
                    Login
                </Button>
            </Box>
        </FormControl>
        <Box>
            <Typography
                sx={{cursor: 'pointer'}}
            >
                Forgot your password?
            </Typography>
        </Box>
    </Box>
  )
}

export default Login