import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ControlButton,
} from "reactflow";
import ZoomNode from "./ZoomNode";
// import {
//   nodes as initialNodes,
//   edges as initialEdges,
// } from "../../Data/initial-elements";

import {initialNodes , initialEdges} from "../../Data/initial-elements";




import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";
import ".././overview.css";
import "./index.css";

const snapGrid = [20, 20];
const nodeTypes = {
  zoom: ZoomNode,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);
const defaultViewport = { x: 0, y: 45, zoom: 1 };
console.log("🚀 ~ file: LeftSection.jsx:18 ~ initialEdges:", initialEdges)
console.log("🚀 ~ file: LeftSection.jsx:18 ~ initialNodes:", initialNodes)
function LeftSection() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      snapToGrid={true}
      nodeTypes={nodeTypes}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
    >
      <Controls />
    </ReactFlow>
  );
}

export default LeftSection;
