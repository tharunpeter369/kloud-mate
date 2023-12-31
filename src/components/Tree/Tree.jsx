import React, { useState } from "react";
import { Rnd } from "react-rnd";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { data, calculatedTreeData } from "../../jSONDATA/jsonData";

const style = {
  display: "flex",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

const treeData = [
  {
    id: "1",
    label: "Applications",
    from: 0,
    to: 1848,
    range: 1848,
    children: [
      {
        id: "2",
        label: "Calendar",
        from: 0,
        to: 1848,
        range: 1848,
      },
      {
        id: "3",
        label: "Email",
        from: 200,
        to: 393,
        range: 313,
        children: [
          {
            id: "7",
            label: "Inbox",
            from: 480,
            to: 893,
            range: 313,
          },
          {
            id: "8",
            label: "Sent",
            from: 859,
            to: 1669,
            range: 110,
          },
          {
            id: "9",
            label: "Drafts",
            from: 669,
            to: 928,
            range: 59,
          },
        ],
      },
    ],
  },
  {
    id: "5",
    label: "Documents",
    from: 0,
    to: 93,
    range: 1848,
    children: [
      {
        id: "10",
        label: "OSS",
        from: 0,
        to: 93,
        range: 1848,
      },
      {
        id: "6",
        label: "MUI",
        from: 0,
        to: 93,
        range: 1848,
        children: [
          {
            id: "8",
            label: "index.js",
            from: 0,
            to: 93,
            range: 1848,
          },
          {
            id: "11",
            label: "components",
            from: 0,
            to: 93,
            range: 1848,
            children: [
              {
                id: "12",
                label: "Button.js",
                from: 0,
                to: 93,
                range: 1848,
              },
              {
                id: "13",
                label: "Input.js",
                from: 0,
                to: 93,
                range: 1848,
              },
            ],
          },
        ],
      },
    ],
  },
];

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, customcolor }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: customcolor,
    },
  })
);

// need to work on the logic to find margin left of th each bar and find the actual width of the bar

let comparingDate = new Date(calculatedTreeData[0]?.startTime);
const renderTree = (nodes, index) => {
  // const { from, to, ...data } = nodes;
  const duration = nodes.duration;
  // const date1 = new Date("2023-06-06T14:16:00.750000128Z");
  const date2 = new Date(nodes.startTime);
  const timeDiffMs = Math.abs(date2 - comparingDate);
  const formattedTimeDiffMs = Math.min(timeDiffMs, 9999);
  let res = 1848 - formattedTimeDiffMs;
  let resVal = (res / 1848) * 100;
  const position = (formattedTimeDiffMs / 1848) * 100;


  return (
    <Box>
      <TreeItem
        key={nodes.spanId}
        nodeId={nodes.spanId}
        classes={{
          content: "custom-treeitem-content",
        }}
        sx={{
          "& .custom-treeitem-content": {
            width: "auto",
          },
        }}
        label={
          <Box display="flex" alignItems="center" backgroundColor="">
            <Typography sx={{ width: 230 }}>{nodes.operationName}</Typography>
            <Box
              position="fixed"
              left="3.5vw"
              width="76vw"
              height={{}}
              marginLeft={31}
              backgroundColor=""
            >
              <Box>
                <Box padding={1} marginLeft={position}>
                  <BorderLinearProgress
                    variant="determinate"
                    value={resVal}
                    customcolor="rgb(255, 149, 31)"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        }
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    </Box>
  );
};

function Tree() {
  const [treeState, setTreestate] = useState(calculatedTreeData);

  return (
    <Rnd
      style={style}
      disableDragging
      minHeight={200}
      default={{
        x: 0,
        y: 0,
        width: 100,
      }}
      enableResizing={{
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        left: false,
        right: false,
        top: true,
        topLeft: false,
        topRight: false,
      }}
    >
      <Box sx={{ marginTop: "10px" }}>
        <Box
          position="absolute"
          left="3.5vw"
          width="76vw"
          height="100%"
          marginLeft={31}
          backgroundColor=""
          zIndex={1000}
        >
          <Box height="100%" display="flex" justifyContent="space-between">
            <Box borderLeft="1px solid lightgrey" height="100%" />
            <Box borderLeft="1px solid lightgrey" height="100%" />
            <Box borderLeft="1px solid lightgrey" height="100%" />
            <Box borderLeft="1px solid lightgrey" height="100%" />
          </Box>
        </Box>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          {treeState.map((node, index) => renderTree(node, index))}
        </TreeView>
      </Box>
    </Rnd>
  );
}

export default Tree;
