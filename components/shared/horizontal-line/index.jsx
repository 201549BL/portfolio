import React from "react";

const HorizontalLine = ({ className, ...rest }) => {
  return <div className={`h-[1px] bg-th-contrast ${className}`}></div>;
};

export default HorizontalLine;
