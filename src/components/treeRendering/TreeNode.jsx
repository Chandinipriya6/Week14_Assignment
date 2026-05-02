// import React, { useState } from "react";

// const TreeNode = ({ node, selectedId, setSelectedId }) => {
//   const [expanded, setExpanded] = useState(false);

//   const isFolder = node.type === "folder";
//   const isSelected = selectedId === node.id;

//   const handleClick = () => {
//     setSelectedId(node.id);

//     if (isFolder) {
//       setExpanded(true);
//     }
//   };

//   return (
//     <div style={{ marginLeft: "20px" }}>
      
//       <div
//         onClick={handleClick}
//         style={{
//           cursor: "pointer",
//           backgroundColor: isSelected ? "#d0ebff" : "transparent",
//           padding: "4px",
//           borderRadius: "4px"
//         }}
//       >
//         {isFolder ? (expanded ? "📂" : "📁") : "📄"} {node.name}
//       </div>

//       {expanded &&
//         node.children?.map((child) => (
//           <TreeNode
//             key={child.id}
//             node={child}
//             selectedId={selectedId}
//             setSelectedId={setSelectedId}
//           />
//         ))}
//     </div>
//   );
// };

// export default TreeNode;

import React, { useState } from "react";

function TreeNode({ node }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginLeft: 20 }}>
      
      {/* Click to toggle only if folder */}
      <div onClick={() => node.type === "folder" && setOpen(!open)}>
        {node.type === "folder"
          ? (open ? "📂" : "📁")
          : "📄"}{" "}
        {node.name}
      </div>

      {/* Show children if open */}
      {open &&
        node.children &&
        node.children.map((child) => (
          <TreeNode key={child.id} node={child} />
        ))}

    </div>
  );
}

export default TreeNode;