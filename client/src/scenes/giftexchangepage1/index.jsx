import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BiRupee } from "react-icons/bi";
import axios from 'axios';

function GiftExchangePage1() {
    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const groupId = searchParam.get("groupId");
    const [names, setNames] = useState([]);
    const [groupData, setgroupData] = useState([])

    useEffect(() => {
      console.log("Page loading...")
      axios.get(`http://localhost:2318/group/single/${groupId}`)
        .then(res => {
          console.log("response" , res.data);
          console.log(" friends Name: ", res.data.friendsName);
          setgroupData(res.data);
          setNames(res.data.friendsName);
        })
    }, []);

    function moveToNextPage() {
      axios .post("http://localhost:2318/players/add", {
        invitationAccepted: 'true',
        playerName: "",
        playerEmail: "",
        groupName: groupData.groupName,
        groupId: groupId,
      }).then ((response) => {
        console.log("player acceptance",response);
        console.log("player data", response.data);
        navigate(`/giftexchange2?playerId=${response.data.playerId}&groupId=${groupId}`);
      })
    }
  return (
    <Box 
      m='1.5rem 2.5rem'
      width={600}
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: '25px'
      }}
    >
        <Typography
          variant='h3'
          color='red'
        >
          Join our Gift Exchange
        </Typography>
        <Typography
          variant='body1'
          // fontWeight='bold'
        >
          {groupData.organiserName} invites to draw names for <b>{groupData.groupName}</b> with {groupData.organiserName}
         , {names[0]}, {names[1]}, {names[2]}, {names[3]}.
        </Typography>
        <Box 
          display='flex'
          flexDirection='column'
          gap={2}
        >
            <Typography>Date of gift exchange: {groupData.giftExchangeDate},</Typography>
            <Typography>Budget: <BiRupee/>{groupData.budget},</Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
        >
          <Typography fontWeight='bold'>Message from {groupData.organiserName}</Typography>
          <Typography
            variant='body1'
            fontStyle='italic'
          > 
            We're going to draw names! Make a wish list and draw name so that everyone has time to buy a gift.
          </Typography>
        </Box>
        <Box>
          <Button 
            onClick={moveToNextPage}
            sx={{
              border: '2px solid red',
              borderRadius: '20px',
              width: '150px',
              color: 'green',
              fontWeight: 'bold',
             
            }}
            // hover= {{
            //   background: 'red'
            // }}
          >
            Continue
          </Button>
        </Box>
    </Box>
  )
}

export default GiftExchangePage1;

//Bring Player names, groupname date of exchange, budget, message from group create page,