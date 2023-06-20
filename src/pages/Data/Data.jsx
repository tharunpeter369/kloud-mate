import { Box, Divider, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import RightSection from "../../components/MiddleSection/RightSection";
import LeftSection from "../../components/MiddleSection/LeftSection";
import { Resizable } from "re-resizable";
import { ResizeHandle } from "@mui/material";
import { Rnd } from "react-rnd";
import Tree from "../../components/Tree/Tree";

const RedSquareBullet = styled("span")(({ color }) => ({
  display: "inline-block",
  width: "5px",
  height: "12px",
  backgroundColor: color,
  marginRight: "8px",
}));
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

function Data() {
  return (
    <Box>
      {/* <Box sx={{ flexGrow: 2, flexShrink: 1, bgcolor: 'lightblue' }}> */}
      <Box id="hi" sx={{ display: "flex", height: "65vh" }}>
        <Box sx={{ flex: 1 }}>
          <LeftSection />
        </Box>
        <Box sx={{ flex: 1 }}>
          <RightSection />
        </Box>
      </Box>
      <Box id="hello" sx={{ height: "25vh" }}>
        <Tree />
      </Box>
    </Box>
  );
}

export default Data;
