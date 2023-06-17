
import { Box, Divider, Grid, Stack, styled } from '@mui/material';
import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material';
import RightSection from '../../components/MiddleSection/RightSection';
import LeftSection from '../../components/MiddleSection/LeftSection';
import { Resizable } from 're-resizable';
import ResizePanel from "react-resize-panel";

const RedSquareBullet = styled('span')(({ color }) => ({
  display: 'inline-block',
  width: '5px',
  height: '12px',
  backgroundColor: color,
  marginRight: '8px',
}));
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};
function Data() {
  return (
    <Box >
      {/* <Box sx={{ flexGrow: 2, flexShrink: 1, bgcolor: 'lightblue' }}> */}
      <Box id="hi" sx={{ display: 'flex', height: 'auto' }}>

        {/* <Box sx={{ flex: 1 }}>
       
          <LeftSection />
        </Box>
        <Box sx={{ flex: 1 }}>
          <RightSection />
        </Box> */}
      </Box>
      <Box id="hello" sx={{ height: '30vh', backgroundColor: "red" }}>
      <ResizePanel direction="e">
    <div className="panel sidebar">left panel</div>
</ResizePanel>
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