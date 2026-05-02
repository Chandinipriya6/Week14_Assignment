
import React, { useState } from "react";
import { data } from "./treeData";
import TreeNode from "./TreeNode";

const TreeView = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
};

export default TreeView;
