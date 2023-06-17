
import { Box, Divider, Grid, Stack, styled } from '@mui/material';
import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material';
import RightSection from '../../components/MiddleSection/RightSection';


const RedSquareBullet = styled('span')(({ color }) => ({
  display: 'inline-block',
  width: '5px',
  height: '12px',
  backgroundColor: color,
  marginRight: '8px',
}));

function Data() {
  return (

    <Box sx={{ display: 'flex' }}>
      {/* <Box sx={{ flexGrow: 2, flexShrink: 1, bgcolor: 'lightblue' }}> */}
      <Box sx={{ flexGrow: 2, flexShrink: 1 }}>
        {/* Content for the left component */}
        <h1>hello worlddddd</h1>
      </Box>
      <Box sx={{ flexGrow: 2, flexShrink: 1 }}>
        <RightSection/>
      </Box>
    </Box>
  )
}

export default Data







    // <Grid container spacing={2}>
    //   <Grid item xs={6}>
    //     {/* Content for the left component */}
    //     <Box height="100%" bgcolor="lightblue">
    //     <h1>hello world</h1>

    //       {/* Left component content goes here */}
    //     </Box>
    //   </Grid>
    //   <Grid item xs={6}>
    //     {/* Content for the right component */}
    //     <Box height="100%" bgcolor="lightgreen">
    //       {/* Right component content goes here */}
    //       <h1>hello world</h1>
    //     </Box>
    //   </Grid>
    // </Grid>
    // <Box sx={{ display: 'flex' }}>
    //   <Box sx={{ flex: 1, bgcolor: 'lightblue' }}>
    //     {/* Content for the left component */}
    //     <h1>hello world</h1>
    //   </Box>
    //   <Box sx={{ flex: 2, bgcolor: 'lightgreen' }}>
    //     {/* Content for the right component */}
    //     <h1>hello world</h1>
    //   </Box>
    //   <Box sx={{ flex: 2, bgcolor: 'yellow' }}>
    //     {/* Content for the right component */}
    //     <h1>hello world</h1>
    //   </Box>
    // </Box>






            {/* Content for the right component */}
        {/* <Box sx={{ paddingY: '40px' }}>
          <h2>Trace Overview</h2>
          <h4>Jun 6th 2023, 20:15:59</h4>
        </Box>
        <Divider />
        <Box sx={{ paddingY: '40px' }}>
          <Stack direction={"row"} sx={{ display: "flex", justifyContent: 'space-between' }}  >
            <h4>3 SERVICES USED</h4>
            <h4>Total:30 spans</h4>
          </Stack>
          <List>
            <ListItem sx={{ py: 0, px: 0 }}>
              <RedSquareBullet color="rgb(204, 118, 0)" />
              <ListItemText primary="authentication-service" />
            </ListItem>
            <ListItem sx={{ py: 0, px: 0 }}>
              <RedSquareBullet color="rgb(255, 149, 31)" />
              <ListItemText primary="orders-service" />
            </ListItem>
            <ListItem sx={{ py: 0, px: 0 }}>
              <RedSquareBullet color="rgb(206, 146, 216)" />
              <ListItemText primary="stock-service" />
            </ListItem>
          </List>
        </Box>
        <Divider />

        <Box>
          Perfomance
        </Box> */}