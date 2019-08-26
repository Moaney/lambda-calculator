import React from "react";

const Display = (props) => {
  console.log("Display", props, props.number);
  return <div>{props.number}</div>;
};
export default Display;
