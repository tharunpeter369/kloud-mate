import React from 'react';
import { MarkerType, Position } from 'reactflow';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { Stack } from '@mui/system';
import { Box, Typography } from '@mui/material';


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
//           <SouthEastIcon />
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
//           <SouthEastIcon />
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
//           <SouthEastIcon />
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
//           <SouthEastIcon />
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
//   {
//     id: '6',
//     type: 'output',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <SouthEastIcon />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               HTTP
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               aspecto.us.auth0...
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 50, y: 400 },
//     style: { border: "1px solid rgb(206, 146, 216)" }
//   },
//   {
//     id: '7',
//     type: 'output',
//     data: {
//       label: (
//         <Stack direction={'row'}>
//           <SouthEastIcon />
//           <Typography>
//             <Typography display={'flex'} fontSize={10}>
//               mongo-db
//             </Typography>
//             <Typography display={'flex'} fontSize={10}>
//               stock-db
//             </Typography>
//           </Typography>
//         </Stack>)
//     },
//     position: { x: 250, y: 400 },
//     style: { border: "1px solid rgb(206, 146, 216)" }
//   },

// ];

// // ../initial-elements.js
// export const edges = [
//   {
//     id: 'e1-1',
//     source: '1', target: '2',
//     label: 'this is an edge label'
//   },
//   {
//     id: 'e1-2',
//     source: '2',
//     target: '3',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//   },
//   {
//     id: 'e1-3',
//     source: '2',
//     target: '4',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//   },
//   {
//     id: 'e1-4',
//     source: '2',
//     target: '5',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//   },
//   // {
//   //   id: 'e1-5',
//   //   source: '3', 
//   //   target: '6',
//   //   sourceHandle: 'top',
//   //   targetHandle: 'bottom',
//   // },
//   // {
//   //   id: 'e1-6',
//   //   source: '4',
//   //   target: '7',
//   //   sourceHandle: 'bottom',
//   //   targetHandle: 'top',
//   // },

//   {
//     id: 'e1-5',
//     source: '3',
//     target: '6',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//   },
//   {
//     id: 'e1-6',
//     source: '4',
//     target: '7',
//     sourceHandle: 'bottom',
//     targetHandle: 'top',
//   }
// ];





export const nodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Http Client
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Mozilla
          </Typography>
        </Box>
      ),
    },
    position: { x: 250, y: 0 },
    style: { border: '1px solid rgb(255, 149, 31)' },
  },
  {
    id: '2',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Service
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Order Service
          </Typography>
        </Box>
      ),
    },
    position: { x: 250, y: 150 },
    style: { border: '1px solid rgb(255, 149, 31)' },
  },
  {
    id: '3',
    type: 'output',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Service
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Authentication Service
          </Typography>
        </Box>
      ),
    },
    position: { x: 50, y: 300 },
    style: { border: '1px solid rgb(255, 149, 31)' },
  },
  {
    id: '4',
    type: 'output',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Service
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>Stock Service
          </Typography>
        </Box>
      ),
    },
    position: { x: 250, y: 300 },
    style: { border: '1px solid rgb(255, 149, 31)' },
  },
  {
    id: '5',
    type: 'output',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>mongo-db
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>order-db
          </Typography>
        </Box>
      ),
    },
    position: { x: 450, y: 300 },
    style: { border: '1px solid rgb(206, 146, 216)' },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>HTTP
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>aspecto.us.auth0...
          </Typography>
        </Box>
      ),
    },
    position: { x: 50, y: 400 },
    style: { border: '1px solid rgb(206, 146, 216)' },
  },
  {
    id: '7',
    type: 'output',
    data: {
      label: (
        <Box>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>mongo-db
          </Typography>
          <Typography variant="body2" display="flex" alignItems="center">
            <span style={{ marginRight: '4px' }}>⇘</span>stock-db
          </Typography>
        </Box>
      ),
    },
    position: { x: 250, y: 400 },
    style: { border: '1px solid rgb(206, 146, 216)' },
  },
];

export const edges = [
  {
    id: 'e1-1',
    source: '1',
    target: '2',
    label: 'this is an edge label',
  },
  {
    id: 'e1-2',
    source: '2',
    target: '3',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: 'e1-3',
    source: '2',
    target: '4',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: 'e1-4',
    source: '2',
    target: '5',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: 'e1-5',
    source: '3',
    target: '6',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: 'e1-6',
    source: '4',
    target: '7',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
];

const nodeStyle = {
  border: '1px solid #000',
  borderRadius: '4px',
  padding: '8px',
  background: '#fff',
  width: '120px',
};

