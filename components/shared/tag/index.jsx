import React from "react";

const Tag = ({ children = "tag" }) => {
  return (
    <div className=" bg-th-background-shaded px-2 py-1 rounded-xl ">
      {children}
    </div>
  );
};

export default Tag;
