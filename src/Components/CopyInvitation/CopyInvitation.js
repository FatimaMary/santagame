import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import copy from 'copy-to-clipboard';

function CopyInvitation() {
    const [copyText, setCopyText] = useState("We're going to draw names! Make a wish list and draw a name so that everyone has time to by a gift.");

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }
  return (
    <Box >
        <Typography>
            There is one thing left to do
        </Typography>
        <Box>
            <Typography>
                Copy the invitation and share it with each member of your group
            </Typography>
            <Typography>
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
          value={copyText}
            onChange={(e) => setCopyText(e.target.value)}
        //   defaultValue="Default Value"
        />
        {/* </Typography> */}
        <Button onClick={copyToClipboard}>Copy Invitation</Button>
        <Typography>
            <a>Visit the group page</a>
        </Typography>
    </Box>
  )
}

export default CopyInvitation