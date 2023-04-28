import React, { useState } from 'react';
import { GrEdit } from "react-icons/gr";
import { Box, Typography, TextField, Button } from '@mui/material';

function GiftFinder() {
    const [show, setShow] = useState(true);
    const [url, setUrl] = useState();
  return (
    <Box>
        <Typography>Gift Finder</Typography>
        <Box>
            <Typography>
                My wish list <span>0</span> Gifts
            </Typography>
        </Box>
        <Box>
            {show ? (
                <GrEdit onClick={() => setShow(!show)} />
            ) : (
                <Box>
                    <TextField
                        value={url}
                        onInput={(e) => setUrl(e.target.value)}
                    />
                    <Button>ADD</Button>
                </Box>
            )}
        </Box>
    </Box>
  )
}

export default GiftFinder