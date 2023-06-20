import React from 'react';
import { MarkerType, Position } from 'reactflow';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Memory, Storage } from '@mui/icons-material';


// export const nodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <SouthEastIcon />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Http Client
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Mozilla
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 250, y: 0 },
//     style: { border: "1px solid rgb(255, 149, 31)" }
//   },
//   {
//     id: '2',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <Memory />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Service
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Order Service
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 250, y: 150 },
//     style: { border: "1px solid rgb(255, 149, 31)" }
//   },
//   {
//     id: '3',
//     type: 'output',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <Memory />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Service
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               authentication Service
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 50, y: 300 },
//     style: { border: "1px solid rgb(255, 149, 31)" }
//   },
//   {
//     id: '4',
//     type: 'output',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <Memory />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Service
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               Stock Service
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 250, y: 300 },
//     style: { border: "1px solid rgb(255, 149, 31)" }
//   },
//   {
//     id: '5',
//     type: 'output',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <Storage />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               mongo-db
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               order-db
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 450, y: 300 },
//     style: { border: "1px solid rgb(206, 146, 216)" }
//   },
//   // {
//   //   id: '6',
//   //   type: 'output',
//   //   data: {
//   //     label: (
//   //       <Stack direction={'row'}>
//   //         <SouthEastIcon />
//   //         <Typography>
//   //           <Typography display={'flex'} fontSize={10}>
//   //             HTTP
//   //           </Typography>
//   //           <Typography display={'flex'} fontSize={10}>
//   //             aspecto.us.auth0...
//   //           </Typography>
//   //         </Typography>
//   //       </Stack>)
//   //   },
//   //   position: { x: 50, y: 400 },
//   //   style: { border: "1px solid rgb(206, 146, 216)" }
//   // },
//   // {
//   //   id: '7',
//   //   type: 'output',
//   //   data: {
//   //     label: (
//   //       <Stack direction={'row'}>
//   //         <SouthEastIcon />
//   //         <Typography>
//   //           <Typography display={'flex'} fontSize={10}>
//   //             mongo-db
//   //           </Typography>
//   //           <Typography display={'flex'} fontSize={10}>
//   //             stock-db
//   //           </Typography>
//   //         </Typography>
//   //       </Stack>)
//   //   },
//   //   position: { x: 250, y: 400 },
//   //   style: { border: "1px solid rgb(206, 146, 216)" }
//   // },

// ];


// export const edges = [
//   {
//     id: 'e1-1',
//     source: '1',
//     target: '2',
//     label: 'this is an edge label',
//     type: 'straight',
//   },
//   {
//     id: 'e1-2',
//     source: '2',
//     target: '3',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//     type: 'straight',
//   },
//   {
//     id: 'e1-3',
//     source: '2',
//     target: '4',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//     type: 'straight',

//   },
//   {
//     id: 'e1-4',
//     source: '2',
//     target: '5',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//     type: 'straight',

//   },
//   {
//     id: 'e1-5',
//     source: '3',
//     target: '6',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//     type: 'straight',

//   },
//   {
//     id: 'e1-6',
//     source: '4',
//     target: '7',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//     type: 'straight',

//   },
// ];

import { calculatedTreeData } from "../jSONDATA/jsonData";



// Recursive function to convert tree to nodes and edges
const convertTreeToNodesEdges = (tree, parentNodeId = null, level = 0, position = 0) => {
  const nodes = [];
  const edges = [];

  const processNode = (node, parentX, parentY) => {
    const { spanId, operationName, children } = node;

    // Calculate the position of the current node based on level and position
    const x = position * 200; // Adjust the horizontal spacing between nodes
    const y = level * 200; // Adjust the vertical spacing between levels

    // Create a new node object with dynamically calculated position
    const newNode = {
      id: spanId,
      type: "default",
      // data: { label: operationName },

      data: {
        label: (
          <Stack direction={'row'}>
            <Storage />
            <Typography>
              <Typography display={'flex'} fontSize={10}>
                operationName
              </Typography>
              {/* <Typography display={'flex'} fontSize={10}>
                order-db
              </Typography> */}
            </Typography>
          </Stack>)
      },
      position: { x, y },
      style: { border: "1px solid rgb(255, 149, 31)" }
    };

    // Add the new node to the nodes array
    nodes.push(newNode);

    // Add an edge connecting the current node to its parent if available
    if (parentNodeId) {
      const newEdge = {
        id: `${parentNodeId}-${spanId}`,
        source: parentNodeId,
        target: spanId,
        // animated: true,
        type: 'straight',
      };
      edges.push(newEdge);
    }

    // Process children recursively with updated level and position
    if (children && children.length > 0) {
      const childrenCount = children.length;
      const childPosition = position - Math.floor(childrenCount / 2);

      children.forEach((child, index) => {
        // Process the child node recursively
        const { nodes: childNodes, edges: childEdges } = convertTreeToNodesEdges(
          [child],
          spanId,
          level + 1,
          childPosition + index
        );

        // Add the child nodes and edges to the main arrays
        nodes.push(...childNodes);
        edges.push(...childEdges);
      });
    }
  };

  // Start processing the root node
  if (tree.length > 0) {
    processNode(tree[0], 0, 0);
  }

  return { nodes, edges };
};



export const { nodes: initialNodes, edges: initialEdges } = convertTreeToNodesEdges(calculatedTreeData);

