import React from "react";

export default function WindowSize() {
  const [size, setSize] = React.useState([
    window.innerHeight,
    window.innerWidth,
  ]);
  // console.log(size);
  return <div>WindowSize</div>;
}
