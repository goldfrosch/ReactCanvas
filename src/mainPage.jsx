import React, { createRef, useEffect } from "react";
import styled from "styled-components";

const Canvas = styled.div`
  .ctx {
    background-color: white;
  }
  .option {
    display: flex;
  }
`;

const Painting = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.paint};
  border-radius: 30px;
  margin: 0 5px;
  cursor: pointer;
`;

const Exam = () => {
  const color = [
    "#FF0000",
    "#ff9100",
    "#FFFF00",
    "#00AA00",
    "#0000FF",
    "#FF00FF",
    "#000000",
  ];
  let canvas;
  let canvasRef = createRef();

  let pos = {
    drawable: false,
    x: -1,
    y: -1,
  };

  let ctx;
  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", initDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishDraw);
    canvas.addEventListener("mouseout", finishDraw);
  }, []);

  const getPosition = (e) => {
    return {
      X: e.clientX,
      Y: e.clientY,
    };
  };

  const initDraw = (e) => {
    ctx.beginPath();
    pos = { drawable: true, ...getPosition(e) };
    ctx.moveTo(pos.X, pos.Y);
  };

  const draw = (e) => {
    if (pos.drawable) {
      pos = { ...pos, ...getPosition(e) };
      ctx.lineTo(pos.X, pos.Y);
      ctx.stroke();
    }
  };

  const finishDraw = () => {
    pos = { drawable: false, X: -1, Y: -1 };
  };

  const setPaint = (paint) => {
    ctx.strokeStyle = paint;
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
  };

  const Download = (e) => {
    let data = canvas.toDataURL();
    e.target.href = data;
  };

  return (
    <Canvas>
      <canvas className="ctx" ref={canvasRef} />
      <div className="option">
        {color.map((paint, key) => (
          <Painting key={key} paint={paint} onClick={() => setPaint(paint)} />
        ))}
      </div>
      <a href="/" download="test.png" onClick={Download}>
        다운로드시 클릭
      </a>
      <button onClick={clearCanvas}>캔버스 초기화</button>
    </Canvas>
  );
};

export default Exam;
