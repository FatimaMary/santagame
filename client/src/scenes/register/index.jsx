import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterValidation from '../../Components/RegisterValidation';
import { Box, Typography, TextField, FormControl as Form, Button, } from '@mui/material';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

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

    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        // setErrors(RegisterValidation(registerData));
        setDataIsCorrect(true);
         createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
            .then(async (res) => {
                const user = res.user;
                await updateProfile(user, {
                    displayName: registerData.name
                });
                // create profile here
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    name: registerData.name,
                    mobileNumber: registerData.mobileNumber,
                    email: registerData.email,
                    password: registerData.password,
                });
                console.log("Register with firebase");

                //Make the POST request to your API end point
                fetch("http://localhost:2318/user/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user.uid,
                        name: registerData.name,
                        mobileNumber: registerData.mobileNumber,
                        email: registerData.email,
                        password: registerData.password
                    }),
                    
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("data: " , data);
                    console.log("fetch id: ", data.userId);
                    // navigate("/groupcreate");
                })
                .catch((error) => {
                    console.log(error);
                    setErrors(error.message);
                });
            })
    }

  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column' ,
        // justifyContent: 'space-around',
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
                    // id="outlined-basic" 
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
                    // id="outlined-basic" 
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
                    // id="outlined-basic" 
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
                    // id='outlined-basic' 
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
        <Typography>You do have an account? Login</Typography>
    </Box>
  )
}

export default Register