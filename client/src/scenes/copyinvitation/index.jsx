import React, { useRef, useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import copy from 'copy-to-clipboard';
import { Link, Link as RouterLink } from "react-router-dom";


function CopyInvitation() {
    const [copyText, setCopyText] = useState("");
    const textFieldRef = useRef(null);

    const copyToClipboard = () => {
        copy(textFieldRef.current.defaultValue);
        setCopyText(textFieldRef.current.defaultValue)
        alert(`You have copied "${textFieldRef.current.defaultValue}"`);
    }
  return (
    <Box 
       m='1.5rem 2.5rem'
       sx={{ display: 'flex', flexDirection: 'column', gap: '20px'}}
       width={500}
    >
        <Typography 
            variant='h4'
            color='green'
            fontWeight='bold'
        >
            There is one thing left to do
        </Typography>
        <Box
        //    border='1px solid red'
           height={100}
           sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px'
            }}
        >
            <Typography
                variant='body1'
                color='blue'
            >
                Copy the invitation and share it with each member of your group
            </Typography>
            <Typography
                variant='body1'
                color='blue'
            >
                People can join using the link in the invitation
            </Typography>
        </Box>
        {/* <Typography
            value={copyText}
            onChange={(e) => setCopyText(e.target.value)}
        > */}
            <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
        //   value={copyText}
        //   onChange={(e) => setCopyText(e.target.value)}
          inputRef={textFieldRef}
          defaultValue={`We're going to draw names! Make a wish list and draw a name so that everyone has time to by a gift.
          Click on the link to draw the name 
          http://localhost:3000/giftexchange1`}
        // defaultValue={
        //     <>
        //       We're going to draw names! Make a wish list and draw a name so that
        //       everyone has time to by a gift.
        //       <br />
        //       <br />
        //       Click on the link to draw the name{" "}
        //       <Link
        //         component={RouterLink}
        //         to="/giftexchange1"
        //         sx={{ cursor: "pointer", color: "blue" }}
        //       >
        //         http://localhost:3000/giftexchange1
        //       </Link>
        //     </>
        //   }
        />
        <Box
         sx={{display: 'flex', justifyContent: 'center'}}
        >
            <Button 
                onClick={copyToClipboard}
                variant='outlined'
                sx={{ 
                    border: '1px solid red', 
                    // backgroundColor: 'red', 
                    width: '200px',
                    borderRadius: '25px',
                    color: 'black'
                }}
                // width='200px'
            >
                Copy Invitation
            </Button>
        </Box>
        <Typography
            fontSize='1.25rem'
            color='#F2E3DB'
            sx={{cursor: 'pointer'}}
        >
            <a>Visit the group page</a>
        </Typography>
    </Box>
  )
}

export default CopyInvitation