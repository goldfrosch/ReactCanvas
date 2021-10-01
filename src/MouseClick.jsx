import React, { useState } from "react";
import styled from "styled-components";

const TestDiv = styled.div`
  width: 100%;
  min-height: 720px;
  background-color: red;
  .locateCheck {
    width: ${(props) => props.x}px;
    height: ${(props) => props.y}px;
    background-color: white;
    transition-duration: 0.6s;
  }
`;

const MouseLocation = () => {
  const [locX, setLocX] = useState(50);
  const [locY, setLocY] = useState(50);

  const onClick = (e) => {
    setLocX(e.clientX);
    setLocY(e.clientY);
    console.log(locX + " " + locY);
  };

  return (
    <TestDiv onClick={onClick} x={locX} y={locY}>
      <canvas className="locateCheck">
        {locX} * {locY}
      </canvas>
    </TestDiv>
  );
};

export default MouseLocation;
